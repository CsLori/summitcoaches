import React, { Component } from 'react';
import './App.css';
import { fetchData } from './api';
import LogIn from './components/LogIn';
import fire from './Fire/Fire';
import Home from './components/Home';
import { Router } from '@reach/router';
import SignUp from './components/SignUp';
import Header from './components/Header';

class App extends Component {
  state = {
    userLoggedIn: null,
    data: null
  };

  authListener() {
    fire.auth().onAuthStateChanged(userLoggedIn => {
      if (userLoggedIn) {
        this.setState({ userLoggedIn });
        localStorage.setItem('userLoggedIn', userLoggedIn.uid);
      } else {
        this.setState({ userLoggedIn: null });
        localStorage.removeItem('userLoggedIn');
      }
    });
  }

  render() {
    const { userLoggedIn } = this.state;
    return (
      <div className='App'>
        <Header userLoggedIn={userLoggedIn} />
        <Router>
          <Home path='/' />
          <LogIn path='/login' />
          <SignUp path='/signup' />
        </Router>
      </div>
    );
  }

  componentDidMount() {
    this.authListener();
    this.getData();
  }

  getData = () => {
    fetchData().then(data => {});
  };
}

export default App;
