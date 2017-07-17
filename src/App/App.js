import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ClassList from '../Class/class';

class App extends Component {
  constructor () {
    super();
  }

  componentDidMount () {

  }

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
        <main className="App-main">
          <section className="Progress-bar">
            <p>Progress Goes Here</p>
          </section>
          <section className="Main-content">
            <h2>Classes</h2>
            <section>
              <ClassList />
            </section>
          </section>
        </main>
        <footer className="App-footer">
          <p>&#169; Jordan Doig, All rules courtesy of D&D 5e, &#169; Wizards of the Coast</p>
        </footer>
      </div>
    );
  }
}

export default App;
