import { combineReducers } from 'redux';
import { getFriendReducer } from './getFriendReducer';
import { addFriendReducer } from './addFriendReducer';
import { deleteFriendReducer } from './deleteFriendReducer';
import { updateFriendReducer } from './updateFriendReducer';

export default combineReducers({
  getFriendReducer,
  addFriendReducer,
  deleteFriendReducer,
  updateFriendReducer
});
