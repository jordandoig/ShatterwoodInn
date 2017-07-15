import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header-left">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Shatterwood Inn</h1>
          </div>
          <div className="header-right">
            <a className="header-button"><h3>Log In</h3></a>
            <a className="header-button"><h3>Sign Up</h3></a>
            <a className="header-button"><h3>Guest</h3></a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
