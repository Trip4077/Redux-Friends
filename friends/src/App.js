import React, { Component } from 'react';
import FriendList from './components/FriendList';

import './App.css';

class App extends Component {
  render() {

    console.log('test app')

    return (
      <div className="App">
        <FriendList />
      </div>
    );
  }
}

export default App;
