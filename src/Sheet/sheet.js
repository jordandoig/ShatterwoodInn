import React, { Component } from 'react';
import './sheet.css';

const celebration = [
  {
    name: 'Hooray'
  },
  {
    name: 'Good Job'
  },
  {
    name: "You're Awesome"
  },
  {
    name: 'Nice Character'
  },
  {
    name: 'Dungeons Await'
  },
  {
    name: 'You are Loved'
  },
  {
    name: 'See You Soon'
  }
]

class Sheet extends Component {
  constructor (props) {
    super(props);
    this.state = {
      class: {},
      race: {}
    }
  }

  componentDidMount () {
    this.setState({class: this.props.progressSelections[0].choice,
    race: this.props.progressSelections[1].choice});
    this.props.handleChange(celebration);
  }

  render () {
    if (this.props.progressSelections) {
      return (
        <div className="Sheet-main">
          <img className="Sheet-img" src="http://i.imgur.com/xsfggMG.png" alt="Character Sheet"/>
          <div id="class">{this.props.progressSelections[0].choice}</div>
          <div id="race">{this.props.progressSelections[1].choice}</div>
        </div>
      )
    } else {
      return <div></div>
    }

  }
}

export default Sheet;
