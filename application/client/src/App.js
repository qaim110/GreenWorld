import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Navbar from "./components/layout/Navbar";

import { Switch, Route } from "react-router-dom";

// Import Pages
import showPostings from "./components/pages/showPostings";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import AboutUs from "./components/pages/AboutUs";
import Post from "./components/pages/Post";

import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Users/Login";
import Register from "./components/Users/Register";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/showPostings" component={showPostings} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
