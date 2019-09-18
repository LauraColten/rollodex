import React, { Component } from 'react';

class Users extends Component {

  state = {
    show: false
  }

  handleClick = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>
        <p>{this.props.user.name.first}</p>
        <br></br>
        {this.state.show ? (
          <div>
          <button onClick={this.handleClick}>Hide Details</button>
          <img src={this.props.user.picture.large}/>
          </div>
        ) : (
          <button onClick={this.handleClick}>Show Details</button>
        )
        }

      </div>
    )
  }
}

export default Users;
