import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { logInFailure, logInSuccess } from '../../modules/login/actions';
import * as types from './actionType';

const logIn = async (email, password) => {
  const response = await axios.get('http://localhost:5000/users', {
    email,
    password,
  });
  return { token: response.data.token };
};

export function* logInWithCredentials({ payload: { email, password } }) {
  try {
    const user = yield logIn(email, password);
    yield put(logInSuccess(user));
  } catch (error) {
    yield put(logInFailure(error));
  }
}

export function* logInAfterRegister({ payload: { email, password } }) {
  yield logInWithCredentials({ payload: { email, password } });
}

export function* onLogInStart() {
  yield takeLatest(types.LOGIN_START, logInWithCredentials);
}

export function* authSagas() {
  yield all([call(onLogInStart)]);
}
