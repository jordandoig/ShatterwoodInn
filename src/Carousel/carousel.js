import React, {Component} from 'react';
import Slider from 'react-slick';
import './carousel.css';

class Carousel extends Component {
  constructor (props) {
    super(props);

    this.changeSelection = this.changeSelection.bind(this);
  }

  changeSelection () {
    let selection = document.getElementsByClassName('slick-center');
    this.props.handleSelection(selection[0].innerHTML);
  }

  render () {
    let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      initialSlide: 0,
      afterChange: this.changeSelection,
      focusOnSelect: true,
      swipeToSlide: true
    };

    return (
      <div className="Carousel">
        <Slider ref='slider' {...settings} className="Carousel">
          {
            this.props.options.map((item, index) => {
              return (
                <h1 className="Carousel-Item" key={index}>{item.name}</h1>
              )
            })
          }
        </Slider>
      </div>
    );
  }
}

export default Carousel;
