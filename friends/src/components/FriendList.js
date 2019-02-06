import React from 'react';
import Friend from './Friend';
import Loader from './Loader';

import { connect } from 'react-redux';
import { getFriends } from '../actions';

class FriendList extends React.Component {
  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    const friends = this.props.getFriendReducer.friends

    return(
      <div className='list'>
        { friends.length > 0 ? friends.map(friend => <Friend data={friend}
                                                             key={friend.id} />)
                               : <Loader />}
      </div>
    );
  }
}

const mstp = state => {
  return {
    ...state
  }
}

export default connect(mstp, { getFriends })(FriendList);
