import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import Home from '../Home/home';
import Classes from '../Class/class';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      progress: [],
      home: true,
      classes: false
    }
  }



  componentDidMount () {
    this.setState({home: true});
    console.log(this.homeVar);
  }

  homeVar =  true;

  render() {
    return (
      <div className="App">
        <Home />
        <Classes />
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
