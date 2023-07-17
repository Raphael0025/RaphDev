import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft } from 'react-icons/fa';

import image from '../assets/clients/iseng.jpg';
import image1 from '../assets/clients/Sheila.jpg';
import image2 from '../assets/clients/dianara.jpg';
import image3 from '../assets/clients/Joy.jpg';

function SliderComp() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
      id: 1,
      url: image,
      name: 'Jeselle Victoria',
      review: `The services we provide should have a higher cost because we allocate our skills and time to them. If someone asks for a discount because they are a friend or a student, it's better to say that the quality of the project is already worth the payment. As for the service regarding the output, there are no comments because everything is good. The work is done quickly, all the animations, photos, and texts are aligned with the design, including the theme color. Everything is good!`,
    },
    {
      id: 2,
      url: image1,
      name: 'Sheila Selma',
      review: `Great job! Everything is well done, and I'm satisfied with the outcome. Please continue to maintain the high-quality work. Your efforts are appreciated, and I have no complaints. Keep up the excellent work!`,
    },
    {
      id: 3,
      url: image2,
      name: 'Dianara Villanueva',
      review: `Based on what I've asked you to do, sir, it turned out well. Everything was done properly, also, you've completed all the tasks I have assigned you, especially the code you provided. You're the best. As for the essay, I'm not yet very skilled in coding, but it seems like I should learn it too. It's also related to my IT course. You're the best, sir! Thank you so much!`,
    },
    {
      id: 4,
      url: image3,
      name: 'Macaria Joy Rabino',
      review: `Working with you has been a pleasant experience. Your professionalism and cooperation throughout the project were greatly appreciated. The quality of your work is commendable, and you delivered the results we were expecting. It was a smooth and efficient collaboration, making the entire process enjoyable. Your expertise and attention to detail were evident in the final outcome. I would highly recommend your services to others looking for a reliable and skilled professional. Thank you for a job well done!`,
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
          <div className={`rounded-3 d-flex justify-content-center align-items-center flex-column ${isSmallScreen ? 'p-3' : 'p-5'} m-0 ${index === slideIndex ? 'slide slide-active rounded-5' : 'slide' }`} key={index} >
            <img alt='filler' src={slide.url} className='rounded-circle w-50' />
            <h3 className='fw-bold'>{slide.name}</h3>
            <div className='w-100 d-flex justify-content-start'>
              <FaQuoteLeft size={24}/>
            </div>
            <p className='lh-sm text-start fs-6 fw-light'> {slide.review}</p>

          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComp;
