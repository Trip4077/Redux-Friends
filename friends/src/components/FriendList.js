import React from 'react';

import { connect } from 'react-redux';
import { getFriends } from '../actions';

class FriendList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('test')
    this.props.getFriends()
  }

  render() {
    return(
      <div>
        Test
      </div>
    );
  }
}

const mstp = state => {
  console.log('MSTP: ', state)

  return {
    ...state
  }
}

export default connect(mstp, { getFriends })(FriendList);
