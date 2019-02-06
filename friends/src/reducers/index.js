import { combineReducers } from 'redux';
import { getFriendReducer } from './getFriendReducer';
import { addFriendReducer } from './addFriendReducer';
import { deleteFriendReducer } from './deleteFriendReducer';

export default combineReducers({
  getFriendReducer,
  addFriendReducer,
  deleteFriendReducer
});
