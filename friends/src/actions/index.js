import axios  from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getFriends = () => dispatch => {
  console.log('FETCH STAGE')
  dispatch({ type: FETCHING_FRIENDS })

  axios.get('http://localhost:5000/api/friends')
        .then(res =>
          dispatch({ type: FETCH_SUCCESS, payload: res.data })
        )
        .catch(err =>
          dispatch({ type: FETCH_FAIL, payload: err })
        );
}
