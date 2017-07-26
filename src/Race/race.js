import React, { Component } from 'react';
import Axios from 'axios';
import './race.css';

class Race extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedRace: null,
      selectedRaceTraits: null
    }
  }

  componentDidMount () {
    this.getRaces();
  }

  componentDidUpdate () {
    this.shouldChange();
  }

  shouldChange () {
    if (this.props.currentSelection && !this.state.selectedRace) {
      this.getSelectedRace();
    } else if (this.state.selectedRace !== null) {
      if (this.state.selectedRace.name !== this.props.currentSelection) {
        this.getSelectedClass();
      }
    }
  }

  getRaces () {
    Axios.get('https://galvanize-cors.herokuapp.com/http://www.dnd5eapi.co/api/races/')
    .then(data => {
      this.props.handleChange(data.data.results);
    })
  }

  getSelectedRace () {
    Axios.get('https://galvanize-cors.herokuapp.com/http://www.dnd5eapi.co/api/classes/' + this.props.currentSelection.toLowerCase())
    .then(data => {
      this.setState({selectedRace: data.data});
    })
  }

  render () {
    return (
      <h1>Race Page</h1>
    )
  }
}

export default Race;
