import axios  from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS })

  axios.get('http://localhost:5000/api/friends')
        .then(res =>
          dispatch({ type: FETCH_SUCCESS, payload: res.data })
        )
        .catch(err =>
          dispatch({ type: FETCH_FAIL, payload: err })
        );
}

export const ADD_FRIENDS = 'ADD_FRIENDS';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAIL = 'ADD_FAIL';

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIENDS })

  axios.post('http://localhost:5000/api/friends', friend)
        .then(res =>
          dispatch({ type: ADD_SUCCESS, payload: res.data })
        )
        .catch(err =>
          dispatch({ type: ADD_FAIL, payload: err })
        );
}

export const DELETE_FRIEND = 'DELETE_FRIEND';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAIL = 'DELETE_FAIL';

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND });

  axios.delete(`http://localhost:5000/api/friends/${id}`)
        .then(res =>
          dispatch({ type: DELETE_SUCCESS, payload: res.data })
        )
        .catch(err =>
          dispatch({ type: DELETE_FAIL, payload: err })
        )
}

export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAIL = 'UPDATE_FAIL';

export const updateFriend = (friend, id) => dispatch => {
  dispatch({ type: UPDATE_FRIEND });

  axios.put(`http://localhost:5000/api/friends/${id}`, friend)
        .then(res =>
          dispatch({ type: UPDATE_SUCCESS, payload: res.data })
        )
        .catch(err =>
            dispatch({ type: UPDATE_FAIL, payload: err })
        )
}
