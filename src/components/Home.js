import React, { Component } from 'react';
import fire from '../Fire/Fire';
import LogIn from './LogIn';

export default class Home extends Component {
  signout = () => {
    fire.auth().signOut();
  };
  render() {
    const { userLoggedIn } = this.props;
    return (
      <div>
        <p>home </p>
        {!userLoggedIn ? (
          <LogIn path='/login' userLoggedIn={userLoggedIn} />
        ) : (
          <button onClick={this.signout}>Sign Out</button>
        )}
      </div>
    );
  }
}
