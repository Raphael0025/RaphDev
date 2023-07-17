import React, {useEffect, useState} from 'react'
import Title from '../Component/Title'
import Card from '../Component/Card'
import { FaJava, FaMobileAlt, FaDesktop  } from 'react-icons/fa';
import { FiVideo, FiLayout  } from 'react-icons/fi';
import { GiArtificialIntelligence } from 'react-icons/gi';

function Service() {
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
        <div id='services' className={`d-flex flex-column justify-content-center align-items-center z-1 ${isSmallScreen ? 'mt-0 m-0 p-0 pt-0' : 'p-5 ms-5 me-5'} service`}>
            <div className='mb-3'>
                <Title className='z-1n' title={'SERVICES'}/>
                <figcaption className={`blockquote-footer ${isSmallScreen ? 'fs-6 px-3 pt-3' : 'fs-5'}`} style={{color: 'var(--text)'}}>Discover the range of services I offer and unlock new possibilities for your projects.</figcaption>
            </div>
            <div className={`container card-group row  ${isSmallScreen ? 'ps-2 pe-2 row-cols-1' : 'ps-5 pe-5 row-cols-3'} z-0`}>
                <Card icon={<FaJava size={100} />} title={'Java Programming'} content={'Offering expert Java programming services, whether you need Console Line Interface (CLI) or Graphics User Interface (GUI) applications. Provide a top-notch custom solutions tailored to meet your specific requirements, Whether it`s a command-line tool or a visually engaging graphical application.'} />
                <Card icon={<FaDesktop size={100} />} title={'Web Development'} content={'Providing comprehensive web development solutions, from elegant landing pages to sophisticated and dynamic web applications. Specialize in building custom websites using cutting-edge technologies such as ReactJS, ExpressJS, NodeJS, MongoDB, HTML/CSS JavaScript, Bootstrap and more. Dedicated to deliver exceptional web solutions tailored to your unique goals and requirements.'} />
                <Card icon={<FaMobileAlt size={100} />} title={'Mobile Development'} content={'Offering professional mobile development services for both personal and business needs. Creating powerful mobile applications using React Native and other cutting-edge technologies. Whether you require a personalized app to streamline your daily tasks or a feature-rich business application to reach your target audience. Transforming your ideas into engaging mobile solutions that drive success.'}/>
                <Card icon={<FiVideo size={100} />} title={'Video Editing'} content={`With my expertise in video editing, I can transform your raw footage into stunning, captivating videos that leave a lasting impression. Whether you need editing for personal projects, promotional content, social media campaigns, or corporate videos, I've got you covered. I pay attention to every detail, ensuring seamless transitions, engaging visual effects, and synchronized audio for a polished final product. Let me bring your vision to life and enhance your videos with my creative touch. Get in touch today and take your videos to the next level!`} />
                <Card icon={<GiArtificialIntelligence size={100} />} title={'Graphic Designing'} content={`Unlock the power of captivating visuals with my expert graphic design services. From stunning logos to eye-catching banners, I specialize in crafting compelling designs that leave a lasting impression. Whether you need a complete branding overhaul or attention-grabbing social media graphics, I've got you covered. With a keen eye for aesthetics and a deep understanding of design principles, I bring your ideas to life with precision and creativity. Elevate your brand's visual identity and stand out from the competition with my top-notch graphic design services. Get ready to captivate your audience and make a lasting impact with stunning designs tailored to your unique vision. Let's collaborate and create something extraordinary together.`} />
                <Card icon={<FiLayout size={100} />} title={'Web/Mobile Designing'} content={`With my expertise in designing visually stunning and user-friendly interfaces for both web and mobile platforms, I guarantee exceptional results. My keen eye for detail and in-depth knowledge of the latest design trends ensure that your designs are not only modern but also functional. Whether you need a seamless and intuitive mobile app or a visually appealing website that showcases your brand, I've got you covered. Trust me to deliver pixel-perfect layouts and engaging user experiences across various devices. Elevate your online presence and stand out from the competition with my exceptional web and mobile design services. Don't miss out on the opportunity to work with a seasoned designer.`}/>
            </div>
        </div>
    )
}

export default Service