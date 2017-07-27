import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './race.css';

class Race extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedRace: null,
      selectedRaceTraits: null,
      selectedRaceAbility: null,
      selectedRaceImg: null
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
        this.getSelectedRace();
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
    let index = 1;
    let ability = "Constitution";
    let imgUrl = "https://s-media-cache-ak0.pinimg.com/736x/58/d1/98/58d198adc00d6045d3c1288433460a34--fantasy-sword-fantasy-rpg.jpg";
    if (this.props.currentSelection === 'Elf') {
      index = 2;
      ability = "Dexterity";
      imgUrl = "http://vignette1.wikia.nocookie.net/forgottenrealms/images/f/fc/157992_SunElfWizard_ScottMFischer.jpg/revision/latest?cb=20140721210529";
    } else if (this.props.currentSelection === 'Halfling') {
      index = 3;
      ability = "Dexterity";
      imgUrl = "https://s-media-cache-ak0.pinimg.com/736x/4b/a9/2f/4ba92ff47f55139349b6a09e59a6d1bf--character-ideas-character-art.jpg";
    } else if (this.props.currentSelection === 'Human') {
      index = 4;
      ability = "Versatility";
      imgUrl = "http://i.imgur.com/rjHfbWE.jpg";
    }
    Axios.get('https://galvanize-cors.herokuapp.com/http://www.dnd5eapi.co/api/races/' + index)
    .then(data => {
      this.setState({selectedRace: data.data, selectedRaceAbility: ability,
      selectedRaceImg: imgUrl});
      console.log(this.state.selectedRace);
    })
  }

  render () {
    if (this.state.selectedRace) {
      return (
        <div className="Race-main">
          <section className="Race-top">
            <h2 className="Race-name">{this.state.selectedRace.name}</h2>
            <h2>Relies on: {this.state.selectedRaceAbility}</h2>
            <h2>Speed: {this.state.selectedRace.speed}ft</h2>
          </section>
          <section className="Race-mid">
            <img src={this.state.selectedRaceImg} alt={this.state.selectedRace.name} className="Race-img"/>
            <section className="Race-mid-content">
              <b>Alignment:</b>
              <b>{this.state.selectedRace.alignment}</b>
              <br/>
              <b>Size:</b>
              <b>{this.state.selectedRace.size_description}</b>
              <br/>
              <b>Age:</b>
              <b>{this.state.selectedRace.age}</b>
            </section>
          </section>
          <section className="Race-bottom">
            <Link to='/new/class' onClick={this.props.undoProgress} className="Class-button"><img alt="Back Arrow" src="http://downloadicons.net/sites/default/files/small-right-arrow-icon-64993.png" className="Class-button back"/></Link>
            <Link to='/new/sheet' onClick={this.props.updateProgress} className="Class-button"><img alt="Next Arrow" src="http://downloadicons.net/sites/default/files/small-right-arrow-icon-64993.png" className="Class-button"/></Link>
          </section>
        </div>

      )
    } else {
      return (
        <div className="Loading">
          {/* Loader to go here */}
        </div>
      )
    }
  }
}

export default Race;
