import axios from 'axios';
import * as types from './actionType';

export const logInStart = (credentials) => ({
  log: console.log({ credentials }),
  type: types.LOGIN_START,
  payload: credentials,
});

export const logInSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

export const logInFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});

export const logOutUser = () => ({
  type: types.USER_LOGOUT,
});
