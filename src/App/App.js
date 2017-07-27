import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from '../logo.png';
import './App.css';
import Home from '../Home/home';
import Builder from '../Builder/builder';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home}/>
          <Route path='/new' component={Builder}/>
          <footer className="App-footer">
            <p>&#169; Jordan Doig</p>
            <Link to='/' className="Footer-link"><img src={logo} className="Footer-logo" alt="logo"/></Link>
            <p>All rules courtesy of D&D 5e, &#169; Wizards of the Coast</p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
