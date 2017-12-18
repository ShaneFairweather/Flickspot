import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/styles/styles.css';
import {FacebookLoginButton} from 'react-social-login-buttons';
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
            <Home/>
      </div>
    );
  }
}

export default App;
