import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './builder.css';
import Classes from '../Class/class';
import Progress from '../Progress/progress';
import Carousel from '../Carousel/carousel';
import Race from '../Race/race';

class Builder extends Component {
  constructor (props) {
    super(props);
    this.state = {
      progressSelections: [],
      options: [{}],
      currentSelection: "",
      titleOrder: ["Class", "Race"]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
  }

  handleChange (arr) {
    this.setState({options: arr});
    this.setState({currentSelection: this.state.options[0].name});
  }

  handleSelection (str) {
    this.setState({currentSelection: str});
  }

  updateProgress () {
    let arr = this.state.progressSelections;
    let obj = {};
    obj.title = this.state.titleOrder.shift();
    obj.choice = this.state.currentSelection;
    arr.push(obj);
    this.setState({progressSelections: arr});
  }

  render () {
    return (
      <Router>
        <div className="Builder">
          <section className="Builder-Top">
            <Carousel options={this.state.options} handleSelection={this.handleSelection}/>
          </section>
          <section className="Builder-Main">
            <section className="Builder-Left">
              <section className="Left-Box">
                <Progress progressSelections={this.state.progressSelections}/>
              </section>
            </section>
            <section className="Builder-Right">
              <section className="Right-Box">
                <Route path="/new/class" render={(props) => (
                  <Classes {...props} handleChange={this.handleChange} options={this.state.options}
                currentSelection={this.state.currentSelection}/>
                )}/>
                <Route path="/new/race" render={(props) => (
                  <Race {...props} handleChange={this.handleChange} options={this.state.options}
                currentSelection={this.state.currentSelection}/>
                )}/>
              </section>
            </section>
          </section>
          <section className="Builder-Bottom">
            <Link to="/new/race" className="Builder-Button" onClick={this.updateProgress}>NEXT</Link>
          </section>
        </div>
      </Router>
    )
  }
}

export default Builder;
