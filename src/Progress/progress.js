import React, { Component } from 'react';
import './progress.css';

class Progress extends Component {
  constructor (props) {
    super(props);
    this.state = {
      progress: []
    }
  }

  componentDidUpdate () {
    if (this.props.progressSelections !== this.state.progress) {
      this.updateProgressBar();
    }
  }

  updateProgressBar () {
    this.setState({progress: this.props.progressSelections});
  }

  render () {
    return (
      <div className="Progress">
        <h2>Progress Bar</h2>
        {
          this.state.progress.map((item, index) => {
            return (
              <h3 key={index}>{item.title}: {item.choice}</h3>
            )
          })
        }
      </div>
    )
  }
}

export default Progress;
