import React, { Component } from 'react';
import fire from '../Fire/Fire';

export default class SignUp extends Component {
  state = {
    user: {
      firstname: '',
      lastname: '',
      number: '',
      address: '',
      password: '',
      email: ''
    },
    userArray: [
      'firstname',
      'lastname',
      'number',
      'address',
      'email',
      'password'
    ]
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      ...prevState,
      user: { ...prevState.user, [name]: value }
    }));
  };

  signup = e => {
    const { user } = this.state;
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {
      password,
      lastname,
      firstname,
      address,
      number,
      email
    } = this.state.user;

    return (
      <form onSubmit={this.signup}>
        <div>
          <label htmlFor='exampleFirstName'>FirstName</label>
          <input
            type='firstname'
            value={firstname}
            name='firstname'
            onChange={this.handleChange}
          />

          <label htmlFor='exampleLastName'>LastName </label>
          <input
            type='lastname'
            value={lastname}
            name='lastname'
            onChange={this.handleChange}
          />

          <label htmlFor='exampleemail'>Type email </label>
          <input
            type='email'
            value={email}
            name='email'
            onChange={this.handleChange}
          />

          <label htmlFor='examplePassword'>Type Password </label>
          <input
            type='password'
            value={password}
            name='password'
            onChange={this.handleChange}
          />
        </div>

        <button type='submit'>Sign Up</button>
      </form>
    );
  }
}
