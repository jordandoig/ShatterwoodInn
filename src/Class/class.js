import React, { Component } from 'react';

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

class Classes extends Component {
  constructor () {
    super ();
    this.state = {
      charClasses: []
    }
  }

  componentDidMount () {
    this.getClasses()
  }

  getClasses () {
    this.setState({charClasses: classList});
  }

  render() {
    return (
      <div className="Class-list">
        {
          this.state.charClasses.map((cl, index) => {
            return (
              <section className="Class-section">
                <h3 key={index.toString()}>{cl.name}</h3>
                <section>

                </section>
              </section>
            )
          })
        }
      </div>
    )
  }
}

export default Classes;
