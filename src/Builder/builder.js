import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './builder.css';
import Classes from '../Class/class';
import Progress from '../Progress/progress';
import Carousel from '../Carousel/carousel';
import Race from '../Race/race';
import Sheet from '../Sheet/sheet';

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

  undoProgress () {
    let progress = this.state.progressSelections;
    let order = this.state.titleOrder;
    order.push(progress.pop());
    this.setState({progressSelections: progress, titleOrder: order})
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
                  <Classes {...props} handleChange={this.handleChange} options={this.state.options} currentSelection={this.state.currentSelection} updateProgress={this.updateProgress} undoProgress={this.undoProgress}/>
                )}/>
                <Route path="/new/race" render={(props) => (
                  <Race {...props} handleChange={this.handleChange} options={this.state.options} currentSelection={this.state.currentSelection} updateProgress={this.updateProgress} undoProgress={this.undoProgress}/>
                )}/>
                <Route path="/new/sheet" render={(props) => (
                  <Sheet {...props} progressSelections={this.state.progressSelections} handleChange={this.handleChange}/>
                )}/>
              </section>
            </section>
          </section>
          <section className="Builder-Bottom"></section>
        </div>
      </Router>
    )
  }
}

export default Builder;
