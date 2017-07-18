import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

const classList = [
  {
    id: 1,
    name: 'Barbarian',
    desc: "A fierce warrior of primitive background who can enter a battle rage",
    hit_die: 'd12',
    primary_ability: 'Strength',
  },
  {
    id: 2,
    name: 'Bard',
    desc: "An inspiring magician whose power echoes the music of creation",
    hit_die: 'd8',
    primary_ability: 'Charisma',
  },
  {
    id: 3,
    name: 'Cleric',
    desc: "A priestly champion who wields divine magic in service of a higher power",
    hit_die: 'd8',
    primary_ability: 'Wisdom',
  },
  {
    id: 4,
    name: 'Druid',
    desc: "A priest of the Old Faith, wielding the powers of nature— moonlight and plant growth, fire and lightning— and adopting animal forms",
    hit_die: 'd8',
    primary_ability: 'Wisdom',
  },
  {
    id: 5,
    name: 'Fighter',
    desc: "A master of martial combat, skilled with a variety of weapons and armor",
    hit_die: 'd10',
    primary_ability: 'Strength or Dexterity',
  },
  {
    id: 6,
    name: 'Monk',
    desc: "An master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection",
    hit_die: 'd8',
    primary_ability: 'Dexterity and Wisdom',
  },
  {
    id: 7,
    name: 'Paladin',
    desc: "A holy warrior bound to a sacred oath",
    hit_die: 'd10',
    primary_ability: 'Strength and Charisma',
  },
  {
    id: 8,
    name: 'Ranger',
    desc: "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization",
    hit_die: 'd10',
    primary_ability: 'Dexterity and Wisdom',
  },
  {
    id: 9,
    name: 'Rogue',
    desc: "A scoundrel who uses stealth and trickery to overcome obstacles and enemies",
    hit_die: 'd8',
    primary_ability: 'Dexterity',
  },
  {
    id: 10,
    name: 'Sorceror',
    desc: "A spellcaster who draws on inherent magic from a gift or bloodline",
    hit_die: 'd6',
    primary_ability: 'Charisma',
  },
  {
    id: 11,
    name: 'Warlock',
    desc: "A wielder of magic that is derived from a bargain with an extraplanar entity",
    hit_die: 'd8',
    primary_ability: 'Charisma',
  },
  {
    id: 12,
    name: 'Wizard',
    desc: "A scholarly magic-user capable of manipulating the structures of reality",
    hit_die: 'd6',
    primary_ability: 'Intelligence',
  }
];

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      progress: [],
      display: []
    }
  }

  componentDidMount () {
    this.getClasses();
  }

  getClasses () {
    this.setState({display: classList});
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
          {/* <section className="Progress-bar">
            <header>
              <h2>Progress</h2>
            </header>
            {
              this.state.progress.map((item, index) => {
                return (
                  <h3 key={index} className="Progress-item">{item.title}: {item.desc}</h3>
                )
              })
            }
          </section> */}
          <section className="Main-content">
            <section className="Main-left">
              <section className="Main1">
                <h2>Getting into Dungeons &amp; Dragons is hard</h2>
                <section className="img-list">
                  <img src="http://i.imgur.com/jgNeHlT.jpg" className="main-img"></img>
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
                  <img src="https://s-media-cache-ak0.pinimg.com/736x/6c/56/f2/6c56f2d899d08cdaf4961483b14d8e11--gaming-memes-tabletop-rpg.jpg" className="main-img"></img>
                  <ul className="Main-list">
                    <li><h3>One Step at a Time</h3></li>
                    <li><h3>In-Depth Explanations</h3></li>
                    <li><h3>Explore your Options</h3></li>
                    <li><h3>Learn as you Go</h3></li>
                    <li><h3>Printable PDF</h3></li>
                  </ul>
                </section>
              </section>
            </section>
            <section className="buttonBox">
              <a href="/" className="main-button"><h3>Click Here</h3><b>To Make Your Own D&amp;D Character</b></a>
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
