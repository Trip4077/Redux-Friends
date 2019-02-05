import React from 'react';

import { connect } from 'react-redux';
import { getFriends } from '../actions';

class FriendList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    console.log(this.props)
    return(
      <div>
        { this.props.getFriendReducer.friends.length > 0 ? <p>yes</p> : <p>no</p>}
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
