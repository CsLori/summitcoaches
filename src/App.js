import React, { Component } from 'react';
import './App.css';
import { fetchData } from './api';
import LogIn from './components/LogIn';
import fire from './components/Fire';
import Home from './components/Home';
import { Router } from '@reach/router';
import SignUp from './components/SignUp';

class App extends Component {
  state = {
    userLoggedIn: {},
    data: null
  };

  authListener() {
    fire.auth().onAuthStateChanged(userLoggedIn => {
      console.log(userLoggedIn);
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
      // <>
      <div className="App">
        <p>hello</p>
        <Router>
          <Home path="/" userLoggedIn={userLoggedIn} />
          <LogIn path="/login" />
          <SignUp path="/signup" />
        </Router>
        {/* </> */}
      </div>
    );
  }

  componentDidMount() {
    this.authListener();
    this.getData();
  }
  getData = () => {
    fetchData().then(data => console.log(data));
  };
}

export default App;
