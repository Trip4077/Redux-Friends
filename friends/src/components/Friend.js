import React from 'react';
import Loader from './Loader';

import { connect } from 'react-redux';
import { deleteFriend, getFriends } from '../actions';


const Friend = props => {


  const deleteHandler = e => {
    e.preventDefault();

    props.deleteFriend(props.data.id);
    props.getFriends();
  }

  return(
    <div>
      { props.getFriendReducer.fetchFriends ? <Loader /> :  <div className='list__friend'>
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
