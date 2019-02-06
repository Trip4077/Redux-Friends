import React from 'react';
import Loader from './Loader';

import { connect } from 'react-redux';
import { deleteFriend, getFriends } from '../actions';


const Friend = props => {
  console.log('FRIEND', props)

  const deleteHandler = e => {
    e.preventDefault();

    props.deleteFriend(props.data.id);
    props.getFriends();
  }

  return(
    <div>
      { props.deleteFriendReducer.deleteFriend ? <Loader /> : <div>
                                                                  <h1>{props.data.name}</h1>
                                                                  <h2>{props.data.age}</h2>
                                                                  <h3>{props.data.email}</h3>
                                                                  <span onClick={deleteHandler}>&#x2718;</span>
                                                                 </div> }
    </div>
  );
}

const mstp = state => {
  return {
    ...state
  }
}

export default connect(mstp, { deleteFriend, getFriends })(Friend);
