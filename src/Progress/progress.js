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
        {
          this.state.progress.map((item, index) => {
            return (
              <p key={index}>{item.title}: {item.choice}</p>
            )
          })
        }
      </div>
    )
  }
}

export default Progress;
