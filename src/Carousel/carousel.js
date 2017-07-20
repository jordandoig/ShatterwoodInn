import React, {Component} from 'react';
import Slider from 'react-slick';
import './carousel.css';

class Carousel extends Component {
  render () {
    let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      initialSlide: 0
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
