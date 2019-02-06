import React from 'react';

import { connect } from 'react-redux';
import { addFriend, getFriends, updateFriend } from '../actions';

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

    for (let key in this.state.friend) {
      if(this.state.friend[key] === '' || this.state.friend[key] === undefined) { return; }
    }

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

  handleUpdate = e => {
    e.preventDefault();

    const friend = this.props.getFriendReducer.friends.filter(friend => friend.name.toLowerCase() === this.state.friend.name.toLowerCase());

    if(friend[0] == undefined) { return; }

    const id = friend[0].id;



    this.props.updateFriend(this.state.friend, id)
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
           <button onClick={this.handleUpdate}>Update Friend</button>
         </div>
      </form>
    );
  }
}

const mstp = state => {
  return { ...state }
}

export default connect(mstp, { addFriend, getFriends, updateFriend })(FriendForm);
