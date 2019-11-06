import React, { Component } from 'react';
import fire from './Fire';
// import { signup } from './SignUp';
import { Link, Router } from '@reach/router';
import SignUp from './SignUp';

export default class LogIn extends Component {
  state = {
    user: {
      password: 'pass123',
      email: 'test@test.com'
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(
        this.state.user.email,
        this.state.user.password
      )
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { user } = this.state;
    const { password, email } = this.state.user;
    return (
      <>
        <div>
          <form>
            <div>
              <label htmlFor="exampleemail">Type email </label>
              <input
                type="email"
                value={email}
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="examplePassword">Type Password </label>
              <input
                type="password"
                value={password}
                name="password"data
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" onClick={this.login}>
              Sign In
            </button>
            <Link to="/signup" userRR={user}>
              <button type="submit" >
                Sign Up
              </button>
            </Link>
          </form>
          <Router>
            <SignUp path="/signup"  handleChange={this.handleChange}/>
          </Router>
        </div>
      </>
    );
  }
}
