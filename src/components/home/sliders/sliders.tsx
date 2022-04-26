import React from "react";
import "./styles.less";
import Slider from "react-slick";
import { sliders } from "ultils/homeSlide";
function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div className="slide-forward" onClick={onClick}>
      <p>{">>"}</p>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div className="slide-back" onClick={onClick}>
      <p>{"<<"}</p>
    </div>
  );
}

const Sliders = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    accessibility: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        {sliders.map((slide, index) => {
          return (
            <div className="slide" key={index}>
              <img src={slide.img} alt="" />
              <div className="slide-text">
                <h2>{slide.title}</h2>
                <h5>{slide.description}</h5>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Sliders;
