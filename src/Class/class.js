import React, { Component } from 'react';

const classList = [
  {
    name: 'Barbarian',
  },
  {
    name: 'Bard',
  },
  {
    name: 'Cleric',
  },
  {
    name: 'Druid',
  },
  {
    name: 'Fighter',
  },
  {
    name: 'Monk',
  },
  {
    name: 'Paladin',
  },
  {
    name: 'Ranger',
  },
  {
    name: 'Rogue',
  },
  {
    name: 'Sorceror',
  },
  {
    name: 'Warlock',
  },
  {
    name: 'Wizard',
  }
];

class Classes extends Component {
  constructor () {
    super ();
    this.state = {
      charClasses: []
    }
  }

  componentDidMount () {
    this.getClasses();
  }

  getClasses () {
    this.setState({charClasses: classList});
  }

  render() {
    return (
      <div className="Class-list">
        {
          this.state.charClasses.map((cl) => {
            return <h3>{cl.name}</h3>
          })
        }
      </div>
    )
  }
}

export default Classes;
