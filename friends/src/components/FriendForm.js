import React from 'react';

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

  render() {
    return (
      <form>
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
      </form>
    );
  }
}

export default FriendForm;
