import { UPDATE_FRIEND,
         UPDATE_SUCCESS,
         UPDATE_FAIL } from '../actions';

const initialState = {
  updateFriend: false,
  friendsUpdated: false,
  friends: [],
  error: ''
}

export const updateFriendReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_FRIEND:
      return {
        ...state,
        updateFriend: true
      }

    case UPDATE_SUCCESS:
      return {
        ...state,
        updateFriend: false,
        friendsUpdated: true,
        friends: action.payload,
        err: ''
      }

      case UPDATE_FAIL:
        return {
          ...state,
          updateFriend: false,
          err: action.payload
        }

    default:
      return state
  }
}
