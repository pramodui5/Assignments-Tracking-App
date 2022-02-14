import * as types from './actionType';

const initialState = {
  assignments: [],
  loading: false,
  error: null,
};

const assignmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Load assignment
    case types.LOAD_ASSIGNMENTS_START:
    case types.CREATE_ASSIGNMENT_START:
    case types.DELETE_ASSIGNMENT_START:
    case types.UPDATE_ASSIGNMENT_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_ASSIGNMENTS_SUCCESS:
    case types.UPDATE_ASSIGNMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        assignments: action.payload,
      };
    case types.LOAD_ASSIGNMENTS_ERROR:
    case types.CREATE_ASSIGNMENT_ERROR:
    case types.DELETE_ASSIGNMENT_ERROR:
    case types.UPDATE_ASSIGNMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Create assignment
    case types.CREATE_ASSIGNMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    // Delete assignment
    case types.DELETE_ASSIGNMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        assignments: state.assignments.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default assignmentsReducer;
