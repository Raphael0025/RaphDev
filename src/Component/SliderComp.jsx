import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image from '../assets/images/home_background_mobile.jpg';
import image1 from '../assets/images/home_background.jpg'

function SliderComp() {
  const [slideIndex, setSlideIndex] = useState(0)
  const slides = [
    {
      id: 1,
      url: image1,
      legend: 'Image 1',
    },
    {
      id: 2,
      url: image,
      legend: 'Image 2',
    },
    {
      id: 3,
      url: image,
      legend: 'Image 3',
    },
    {
      id: 4,
      url: image,
      legend: 'Image 4',
    },
  ];
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    beforeChange: (current, next) => setSlideIndex(next), 
  };
  return (
    <div className='container ps-5 pe-5'>
      <Slider {...settings} >
        {slides.map((slide, index) => (
          <div className={`rounded-3 d-flex justify-content-center align-items-center flex-column p-0 mt-4 mb-4 m-0 ${index === slideIndex ? 'slide slide-active bg-light rounded-5' : 'slide bg-dark'}`} key={index}>
            <img alt='image filler' />
            <h3>Title</h3>
            <p>Comments</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComp;
