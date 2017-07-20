import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './builder.css';
import Classes from '../Class/class';
import Progress from '../Progress/progress';
import Carousel from '../Carousel/carousel';

class Builder extends Component {
  constructor (props) {
    super(props);
    this.state = {
      progressSelections: [],
      options: [{}]
    }
  }

  render () {
    return (
      <Router>
        <div className="Builder">
          <section className="Builder-Top">
            <Carousel options={this.state.options}/>
          </section>
          <section className="Builder-Left">
            <Progress progressSelections={this.state.progressSelections}/>
          </section>
          <section className="Builder-Right">
            <Route path="/new/class" component={Classes}/>
          </section>
        </div>
      </Router>
    )
  }
}

export default Builder;
