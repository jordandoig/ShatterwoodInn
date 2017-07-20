import React, {Component} from 'react';
import Slider from 'react-slick';
import './carousel.css';

class Carousel extends Component {
  constructor (props) {
    super(props);

    this.changeSlide = this.changeSlide.bind(this);
  }

  changeSlide (e) {
    this.refs.slider.slickGoTo(e.target.value);
    console.log(e.target.value);
  }

  render () {
    let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      initialSlide: 0,

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
        <section className="Carousel-Nav">
          {
            this.props.options.map((item, index) => {
              return (
                <button key={index} value={index} onClick={this.changeSlide} className="Carousel-Button"><h2 value={index}>{item.name}</h2></button>
              )
            })
          }
        </section>
      </div>
    );
  }
}

export default Carousel;
