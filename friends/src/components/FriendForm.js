import React from 'react';

import { connect } from 'react-redux';
import { addFriend, getFriends } from '../actions';

class FriendForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  handleChange = e => {
    this.setState({
     friend: {
       ...this.state.friend,
       [e.target.name]: e.target.value
     }
   });
  }

  handleAdd = e => {
    e.preventDefault();

    this.props.addFriend(this.state.friend)
    this.props.getFriends();

    this.setState({
      friend: {
        name: '',
        age: '',
        email: ''
      }
    })
  }

  render() {

    return (
      <form className='input-form'>
        <input type='text'
                name='name'
                placeholder='Name'
                onChange={this.handleChange}
                value={this.state.friend.name}
                />
         <input type='text'
                name='age'
                placeholder='Age'
                onChange={this.handleChange}
                value={this.state.friend.age}
                />
         <input type='text'
                name='email'
                placeholder='Email'
                onChange={this.handleChange}
                value={this.state.friend.email}
                />

         <div>
           <button onClick={this.handleAdd}>Add Friend</button>
           <button>Update Friend</button>
         </div>
      </form>
    );
  }
}

const mstp = state => {
  return { ...state }
}

export default connect(mstp, { addFriend, getFriends })(FriendForm);
