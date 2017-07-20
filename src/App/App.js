import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from '../logo.png';
import './App.css';
import Home from '../Home/home';
import Classes from '../Class/class';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      choices: []
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home} choices={this.state.choices}/>
          <Route path='/class' component={Classes} choices={this.state.choices}/>
          <footer className="App-footer">
            <p>&#169; Jordan Doig</p>
            <img src={logo} className="Footer-logo" alt="logo"/>
            <p>All rules courtesy of D&D 5e, &#169; Wizards of the Coast</p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
