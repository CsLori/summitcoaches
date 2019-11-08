import React, { Component } from 'react';
import './App.css';
import fire from './Fire/Fire';
import { Router } from '@reach/router';

import LogIn from './components/pages/LogIn';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Header from './components/reuseable/Header';
import Terms from './components/pages/Terms';
import Services from './components/pages/Services';
import About from './components/pages/About';
import UserList from './components/reuseable/UserList';
import UserCard from './components/reuseable/UserCard';
import Footer from './components/reuseable/Footer';

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

  componentDidMount() {
    this.authListener();
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
          <Terms path='/terms' />
          <Services path='/services' />
          <About path='/about' />
          <UserList path='/users' />
          <UserCard path='/users/:id' />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
