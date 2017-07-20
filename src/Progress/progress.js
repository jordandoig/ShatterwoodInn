import React, { Component } from 'react';
import './progress.css';

class Progress extends Component {

  render () {
    return (
      <div className="Progress">
        {
          this.props.choices.map((item, index) => {
            return (
              <div key={index} className="Progress-item">
                <p>{item.title}: {item.choice}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Progress;
