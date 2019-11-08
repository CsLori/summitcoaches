import React, { Component } from 'react';
import './App.css';
import LogIn from './components/LogIn';
import fire from './Fire/Fire';
import Home from './components/Home';
import { Router } from '@reach/router';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Terms from './components/Terms';
import Services from './components/Services';
import About from './components/About';
import UserList from './components/UserList';
import UserCard from './components/UserCard';
import Footer from './components/Footer';

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
