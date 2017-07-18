import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import Home from '../Home/home';
import Classes from '../Class/class';
// import Carousel from '../Carousel/carousel';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      display: <Home />,
      progress: [],
      home: false,
      classes: false
    }
  }

  componentDidMount () {
    this.setState({home: true});
  }

  shouldComponentUpdate () {
    if (this.state.home) {
      this.setState({display: <Home />});
    } else if (this.state.classes) {
      this.setState({display: <Classes />});
    }
    return true;
  }

  render() {
    return (
      <div className="App">
        {this.state.display}
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
