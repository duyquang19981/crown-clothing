import { combineReducers } from 'redux';

import userReducer from './user/user.recuder';

export default combineReducers({
  user: userReducer,
});
