import * as types from './actionType';

//  load assignment
export const loadAssignmentsStart = () => ({
  type: types.LOAD_ASSIGNMENTS_START,
});

export const loadAssignmentsSuccess = (assignment) => ({
  type: types.LOAD_ASSIGNMENTS_SUCCESS,
  payload: assignment,
});

export const loadAssignmentsError = (error) => ({
  type: types.LOAD_ASSIGNMENTS_ERROR,
  payload: error,
});

//  create assignment
export const createAssignmentsStart = (assignment) => ({
  type: types.CREATE_ASSIGNMENT_START,
  payload: assignment,
});

export const createAssignmentSuccess = () => ({
  type: types.CREATE_ASSIGNMENT_SUCCESS,
});

export const createAssignmentError = (error) => ({
  type: types.CREATE_ASSIGNMENT_ERROR,
  payload: error,
});

//  delete assignment
export const deleteAssignmentStart = (assignmentId) => ({
  type: types.DELETE_ASSIGNMENT_START,
  payload: assignmentId,
});

export const deleteAssignmentSuccess = (assignmentId) => ({
  type: types.DELETE_ASSIGNMENT_SUCCESS,
  payload: assignmentId,
});

export const deleteAssignmentError = (error) => ({
  type: types.DELETE_ASSIGNMENT_ERROR,
  payload: error,
});

//  update assignment
export const updateAssignmentStart = (assignmentInfo) => ({
  type: types.UPDATE_ASSIGNMENT_START,
  payload: assignmentInfo,
});

export const updateAssignmentSuccess = () => ({
  type: types.UPDATE_ASSIGNMENT_SUCCESS,
});

export const updateAssignmentError = (error) => ({
  type: types.UPDATE_ASSIGNMENT_ERROR,
  payload: error,
});
