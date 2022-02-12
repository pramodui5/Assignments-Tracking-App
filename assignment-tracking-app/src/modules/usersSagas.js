import * as types from './constants/type';
import { take, takeEvery, takeLatest, put, all, delay, fork, call } from 'redux-saga/effects';
import { loadUsersSuccess, loadUsersError } from './actions/actions';
import { loadUserApi } from '../API/api';

export function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUserApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error.response.data));
  }
}

export function* onLoadUsers() {
  yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

const usersSagas = [fork(onLoadUsers)];

export default function* rootSaga() {
  yield all([...usersSagas]);
}
