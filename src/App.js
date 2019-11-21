import React, { Component } from "react";
import "./App.css";
import fire from "./Fire/Fire";
import { Router } from "@reach/router";
require("dotenv").config();

import LogIn from "./components/pages/LogIn";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Header from "./components/reuseable/Header";
import Terms from "./components/pages/Terms";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import UserList from "./components/reuseable/UserList";
import UserCard from "./components/reuseable/UserCard";
import Footer from "./components/reuseable/Footer";
import Contact from "./components/pages/Contact";
import Quote from "./components/pages/Quote";
import Quotes from "./components/pages/Quotes";
import Reply from "./components/pages/Reply";

class App extends Component {
  state = {
    userLoggedIn: null,
    data: null
  };

  authListener() {
    fire.auth().onAuthStateChanged(userLoggedIn => {
      console.log(userLoggedIn);
      if (userLoggedIn) {
        this.setState({ userLoggedIn });
        localStorage.setItem("userLoggedIn", userLoggedIn.uid);
      } else {
        this.setState({ userLoggedIn: false });
        localStorage.removeItem("userLoggedIn");
      }
    });
  }

  componentDidMount() {
    this.authListener();
  }

  render() {
    const { userLoggedIn } = this.state;
    const user = localStorage.getItem("userLoggedIn") || userLoggedIn;
    console.log(userLoggedIn);
    return (
      <div className="App">
        <Header userLoggedIn={userLoggedIn} />
        <Router primary={false}>
          <Home path="/" />
          <LogIn path="/login" />
          <SignUp path="/signup" />
          <Terms path="/terms" />
          <Services path="/services" />
          <About path="/about" />
          <Contact path="/contact" />
          <UserList path="/users" />
          <UserCard path="/users/:id" />
          <Quote path="/quote" />
          <Reply path="/quotes/:id/reply" />
          {user && <Quotes path="/quotes" />}
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
