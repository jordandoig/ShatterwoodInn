import React, { Component } from 'react';
// import logo from '../logo.png';
import './home.css';
import Header from '../Header/header';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <main className="Home-main">
          <section className="Main-content">
            <section className="Main-left">
              <section className="Main1">
                <h2>Getting into Dungeons &amp; Dragons is hard</h2>
                <section className="img-list">
                  <img src="http://i.imgur.com/jgNeHlT.jpg" className="main-img" alt=''></img>
                  <ul className="Main-list">
                    <li><h3>Thousands of Pages</h3></li>
                    <li><h3>Hundreds of Rules</h3></li>
                    <li><h3>Twelve Base Classes</h3></li>
                    <li><h3>Nine Base Races</h3></li>
                    <li><h3>Billions of Possible Combinations</h3></li>
                  </ul>
                </section>
              </section>
              <section className="Main2">
                <h2>Shatterwood Inn makes it easy!</h2>
                <section className="img-list">
                  <img src="https://s-media-cache-ak0.pinimg.com/736x/6c/56/f2/6c56f2d899d08cdaf4961483b14d8e11--gaming-memes-tabletop-rpg.jpg" className="main-img" alt=''></img>
                  <ul className="Main-list">
                    <li><h3>One Step at a Time</h3></li>
                    <li><h3>In-Depth Explanations</h3></li>
                    <li><h3>Explore your Options</h3></li>
                    <li><h3>Learn as you Go</h3></li>
                    <li><h3>Printable PDF Character Sheet</h3></li>
                  </ul>
                </section>
              </section>
            </section>
            <section className="buttonBox">
              <a className="main-button"><h3>Click Here</h3><b>To Make Your Own D&amp;D Character</b></a>
            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
