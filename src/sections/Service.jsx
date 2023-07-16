import React from 'react'
import Title from '../Component/Title'
import Card from '../Component/Card'
import { FaJava, FaMobileAlt, FaDesktop  } from 'react-icons/fa';

function Service() {
    return (
        <div id='services' className='d-flex flex-column justify-content-center align-items-center z-1 pt-0 p-5 mt-0 ms-5 me-5 service'>
            <div>
                <Title className='z-1n' title={'SERVICE'}/>
            </div>
            <div className='container card-group ps-5 pe-5 z-0'>
                <Card icon={<FaJava size={100} />} title={'Java Programming'} content={'Offering expert Java programming services, whether you need Console Line Interface (CLI) or Graphics User Interface (GUI) applications. Provide a top-notch custom solutions tailored to meet your specific requirements, Whether it`s a command-line tool or a visually engaging graphical application.'} />
                <Card icon={<FaDesktop size={100} />} title={'Web Development'} content={'Providing comprehensive web development solutions, from elegant landing pages to sophisticated and dynamic web applications. Specialize in building custom websites using cutting-edge technologies such as ReactJS, ExpressJS, NodeJS, MongoDB, HTML/CSS JavaScript, Bootstrap and more. Dedicated to deliver exceptional web solutions tailored to your unique goals and requirements.'} />
                <Card icon={<FaMobileAlt size={100} />} title={'Mobile Development'} content={'Offering professional mobile development services for both personal and business needs. Creating powerful mobile applications using React Native and other cutting-edge technologies. Whether you require a personalized app to streamline your daily tasks or a feature-rich business application to reach your target audience. Transforming your ideas into engaging mobile solutions that drive success.'}/>
            </div>
        </div>
    )
}

export default Service