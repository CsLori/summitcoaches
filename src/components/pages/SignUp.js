import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { navigate } from '@reach/router';

import fire from '../../Fire/Fire';
import { createUser } from '../../api';
import './SignUp.css';

export default class SignUp extends Component {
  state = {
    userForm: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      number: '',
      address: ''
    }
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      ...prevState,
      userForm: { ...prevState.userForm, [name]: value }
    }));
  };

  signup = e => {
    const { userForm } = this.state;
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(userForm.email, userForm.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
    createUser(userForm).then(data => {
      const userData = {
        ...userForm,
        id: data.name
      };
      navigate('/');
      console.log(userData);
    });
  };

  render() {
    const { userForm } = this.state;

    const userArray = [];
    for (let key in userForm) {
      userArray.push(key);
    }

    return (
      <div className='signup-container'>
        <h3>Sign Up</h3>
        <Form onSubmit={this.signup}>
          {userArray.map(data => (
            <FormGroup key={data}>
              <Label for={data}>{data}:</Label>
              <Input
                type={data !== 'password' && data !== 'email' ? 'text' : data}
                id={data}
                value={userForm[data]}
                name={data}
                onChange={this.handleChange}
              />
            </FormGroup>
          ))}
          <Button outline color='primary' type='submit'>
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}
