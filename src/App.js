import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/Users';

class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    fetch('https://randomuser.me/api?results=25')
      .then(response => response.json())
      .then((users) => {
        this.setState({users: users.results})
      })

    }
  render() {
    return (
      <div>
        {this.state.users.map((user, index) => (
          <Users user={user}/>
        ))}
      </div>
    )
  }
}



export default App;
