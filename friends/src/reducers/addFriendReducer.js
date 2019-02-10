import { ADD_FRIENDS,
         ADD_SUCCESS,
         ADD_FAIL } from '../actions';

const initialState = {
  addingFriends: false,
  friendsAdded: false,
  friends: [],
  error: ''
}

export const addFriendReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FRIENDS:
      return {
        ...state,
        addingFriends: true
      }

    case ADD_SUCCESS:
      return {
        ...state,
        addingFriends: false,
        friendsAdded: true,
        friends: action.payload,
        err: ''
      }

      case ADD_FAIL:
        return {
          ...state,
          addingFriends: false,
          err: action.payload
        }

    default:
      return state
  }
}
