import { DELETE_FRIEND,
         DELETE_SUCCESS,
         DELETE_FAIL } from '../actions';

const initialState = {
  deleteFriend: false,
  deleteComplete: false,
  friends: [],
  error: ''
}

export const deleteFriendReducer = (state = initialState, action) => {
  switch(action.type) {
    case DELETE_FRIEND:
      return {
        ...state,
        deleteFriend: true
      }

    case DELETE_SUCCESS:
      return {
        ...state,
        deleteFriend: false,
        deleteComplete: true,
        friends: action.payload,
        err: ''
      }

      case DELETE_FAIL:
        return {
          ...state,
          deleteFriend: false,
          err: action.payload
        }

    default:
      return state
  }
}
