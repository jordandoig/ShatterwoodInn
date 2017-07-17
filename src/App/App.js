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

// const raceList = [
//   {
//     id: 1,
//     name: 'Dwarf'
//   },
//   {
//     id: 2,
//     name: 'Elf'
//   }
// ];
//
// const subraceList = [
//   {
//     id: 1,
//     name: 'Dwarf'
//   },
//   {
//     id: 2,
//     name: 'Elf'
//   }
// ];

class App extends Component {
  constructor () {
    super();
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
          <section className="Progress-bar">
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
          </section>
          <section className="Main-content">
            <h2>Classes</h2>
            <section className="Main-display">
              {
                this.state.display.map((item, index) => {
                  return (
                    <section key={index} className="Display-section">
                      <input type="radio" name="selection"></input>
                      <table className="Display-content">
                        <tr className="Display-header">
                          <td>{item.name}</td>
                          <td>{item.hit_die}</td>
                          <td>{item.primary_ability}</td>
                        </tr>
                        <br/>
                        <tr>{item.desc}</tr>
                      </table>
                    </section>
                  )
                })
              }
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
