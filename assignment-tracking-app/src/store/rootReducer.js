import { combineReducers } from 'redux';

import usersReducer from '../modules/reducers/reducer';

const rootReducer = combineReducers({
  data: usersReducer,
});

export default rootReducer;
