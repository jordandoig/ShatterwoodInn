import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

const classList = [
  {
    id: 1,
    name: 'Barbarian',
  },
  {
    id: 2,
    name: 'Bard',
  },
  {
    id: 3,
    name: 'Cleric',
  },
  {
    id: 4,
    name: 'Druid',
  },
  {
    id: 5,
    name: 'Fighter',
  },
  {
    id: 6,
    name: 'Monk',
  },
  {
    id: 7,
    name: 'Paladin',
  },
  {
    id: 8,
    name: 'Ranger',
  },
  {
    id: 9,
    name: 'Rogue',
  },
  {
    id: 10,
    name: 'Sorceror',
  },
  {
    id: 11,
    name: 'Warlock',
  },
  {
    id: 12,
    name: 'Wizard',
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
            <section>
              {
                this.state.display.map((item, index) => {
                  return (
                    <section key={index} className="Display-section">
                        <button>Choose Me!</button>
                      <section className="Display-content">
                        <h3>{item.name}</h3>
                      </section>
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
