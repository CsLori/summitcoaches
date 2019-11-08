import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css';
import fire from '../../Fire/Fire';
import { Link, Router, navigate } from '@reach/router';
import SignUp from './SignUp';

export default class LogIn extends Component {
  state = {
    user: {
      password: 'pass123',
      email: 'test@test.com'
    },
    error: null
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
      .then(u => navigate('/'))
      .catch(error => {
        this.setState({ error: error.message });
      });
  };

  render() {
    const { user, error } = this.state;
    return (
      <>
        <div className='login-container'>
          {error && <p>{error}</p>}
          <Form>
            <FormGroup>
              <Label htmlFor='exampleemail'>Email:</Label>
              <Input
                type='email'
                value={user.email}
                name='email'
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='examplePassword'>Password:</Label>
              <Input
                type='password'
                value={user.password}
                name='password'
                data
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button outline color='primary' type='submit' onClick={this.login}>
              Login
            </Button>
            <Link to='/signup'>
              <p>Not registered? Create Account!</p>
            </Link>
          </Form>
          <Router>
            <SignUp path='/signup' />
          </Router>
        </div>
      </>
    );
  }
}
