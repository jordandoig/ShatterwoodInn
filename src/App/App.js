import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import Home from '../Home/home';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      progress: []
    }
  }

  componentDidMount () {

  }

  render() {
    return (
      <div className="App">
        <Home />
        <footer className="App-footer">
          <p>&#169; Jordan Doig</p>
          <img src={logo} className="Footer-logo" alt="logo"/>
          <p>All rules courtesy of D&D 5e, &#169; Wizards of the Coast</p>
        </footer>
      </div>
    );
  }
}

export default App;
