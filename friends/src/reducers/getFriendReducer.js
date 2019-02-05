import { FETCHING_FRIENDS,
         FETCH_SUCCESS,
         FETCH_FAIL } from '../actions';

const initialState = {
  fetchFriends: false,
  friendsFetched: false,
  friends: [],
  error: ''
}

export const getFriendReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_FRIENDS:
      return {
        ...state,
        fetchFriends: true
      }

    case FETCH_SUCCESS:
      return {
        ...state,
        fetchFriends: false,
        friendsFetched: true,
        friends: action.payload,
        err: ''
      }

      case FETCH_FAIL:
        return {
          ...state,
          fetchFriends: false,
          err: action.payload
        }

    default:
      return state
  }
}
