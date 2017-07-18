import React, {Component} from 'react';
import logo from '../logo.png';
import './header.css';

class Header extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <header className="header">
        <div className="header-left">
          <img src={logo} className="header-logo" alt="logo" />
          <h1>Shatterwood Inn</h1>
        </div>
        <div className="header-right">
          <a className="header-button"><h3>Log In</h3></a>
          <a className="header-button"><h3>Sign Up</h3></a>
          <a className="header-button"><h3>Guest</h3></a>
        </div>
      </header>
    )
  }
}

export default Header;
