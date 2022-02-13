import { combineReducers } from 'redux';

import usersReducer from '../modules/user/reducer';

const rootReducer = combineReducers({
  data: usersReducer,
});

export default rootReducer;
