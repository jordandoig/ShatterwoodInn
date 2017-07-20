import React, {Component} from 'react';
import Slider from 'react-slick';
import './carousel.css';

class Carousel extends Component {
  render () {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true
    };

    return (
      <Slider {...settings}>
        {
          this.props.options.map((item, index) => {
            return (
              <img src={item.imgUrl} alt={item.name} key={index}/>
            )
          })
        }
      </Slider>
    );
  }
}

export default Carousel;
