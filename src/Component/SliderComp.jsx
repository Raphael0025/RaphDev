import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image from '../assets/images/home_background_mobile.jpg';
import image1 from '../assets/images/home_background.jpg';

function SliderComp() {
  const [slideIndex, setSlideIndex] = useState(0);
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

  const calculateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 576) {
      return 1;
    } else if (screenWidth <= 1200) {
      return 2;
    } else {
      return 3;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setSlideIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: calculateSlidesToShow(),
    autoplay: true,
    beforeChange: (current, next) => setSlideIndex(next),
  };
  const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 576);
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return() => window.removeEventListener('resize', handleResize)
  },[])
  
  return (
    <div className={`container ${isSmallScreen ? 'ps-0 pe-0' : 'ps-5 pe-5'}`}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            className={`rounded-3 d-flex justify-content-center align-items-center flex-column p-0 mt-4 mb-4 m-0 ${index === slideIndex ? 'slide slide-active bg-dark rounded-5' : 'slide bg-dark' }`}
            key={index}
          >
            <img alt='image filler' />
            <h3>{slide.legend}</h3>
            <p>Comments</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComp;
