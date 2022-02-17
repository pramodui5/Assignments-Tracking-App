import { combineReducers } from 'redux';

import usersReducer from '../modules/users/reducer';
import assignmentsReducer from '../modules/assignments/reducer';

const rootReducer = combineReducers({
  usersReducer,
  assignmentsReducer,
});

export default rootReducer;
