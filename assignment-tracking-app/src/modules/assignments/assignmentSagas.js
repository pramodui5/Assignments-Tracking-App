import * as types from './actionType';
import { take, takeEvery, takeLatest, put, all, delay, fork, call } from 'redux-saga/effects';
import {
  loadAssignmentsSuccess,
  loadAssignmentsError,
  createAssignmentSuccess,
  createAssignmentError,
  deleteAssignmentSuccess,
  deleteAssignmentError,
  updateAssignmentSuccess,
  updateAssignmentError,
} from './actions';
import {
  createAssignmentApi,
  loadAssignmentApi,
  deleteAssignmentApi,
  updateAssignmentApi,
} from '../../API/api';

function* onloadAssignmentsStartAsync() {
  try {
    const response = yield call(loadAssignmentApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadAssignmentsSuccess(response.data));
    }
  } catch (error) {
    yield put(loadAssignmentsError(error.response.data));
  }
}

function* onCreateAssignmentStartAsync({ payload }) {
  try {
    const response = yield call(createAssignmentApi, payload);
    if (response.status === 200) {
      yield put(createAssignmentSuccess(response.data));
    }
  } catch (error) {
    yield put(createAssignmentError(error.response.data));
  }
}

function* onDeleteAssignmentStartAsync(AssignmentId) {
  try {
    const response = yield call(deleteAssignmentApi, AssignmentId);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteAssignmentSuccess(AssignmentId));
    }
  } catch (error) {
    yield put(deleteAssignmentError(error.response.data));
  }
}

function* onUpdateAssignmentStartAsync({ payload: { id, formValue } }) {
  try {
    const response = yield call(updateAssignmentApi, id, formValue);
    if (response.status === 200) {
      yield delay(500);
      yield put(updateAssignmentSuccess());
    }
  } catch (error) {
    yield put(updateAssignmentError(error.response.data));
  }
}

function* onDeleteAssignment() {
  while (true) {
    const { payload: AssignmentId } = yield take(types.DELETE_ASSIGNMENT_START);
    yield call(onDeleteAssignmentStartAsync, AssignmentId);
  }
}
function* onloadAssignments() {
  yield takeEvery(types.LOAD_ASSIGNMENTS_START, onloadAssignmentsStartAsync);
}

function* onCreateAssignment() {
  yield takeLatest(types.CREATE_ASSIGNMENT_START, onCreateAssignmentStartAsync);
}

function* onUpdateAssignment() {
  yield takeLatest(types.UPDATE_ASSIGNMENT_START, onUpdateAssignmentStartAsync);
}

const combineAssignmentsSagas = [
  fork(onloadAssignments),
  fork(onCreateAssignment),
  fork(onDeleteAssignment),
  fork(onUpdateAssignment),
];

export default function* assignmentsSagas() {
  yield all([...combineAssignmentsSagas]);
}
