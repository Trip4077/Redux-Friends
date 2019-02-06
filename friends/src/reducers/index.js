import { combineReducers } from 'redux';
import { getFriendReducer } from './getFriendReducer';
import { addFriendReducer } from './addFriendReducer';

export default combineReducers({
  getFriendReducer,
  addFriendReducer
});
