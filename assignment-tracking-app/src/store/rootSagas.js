import { all, call } from 'redux-saga/effects';
import assignmentsSagas from '../modules/assignments/assignmentSagas';
import usersSagas from '../modules/users/usersSagas';
import { authSagas } from '../modules/login/loginSagas';

export default function* rootSaga() {
  yield all([usersSagas(), assignmentsSagas(), authSagas()]);
}
