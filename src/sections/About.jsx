import React from 'react'
import RightTitle from '../Component/RightTitle'
import image from '../assets/images/xmas2022.jpg'
import 'animate.css';

function About() {
    return (
        <div id='about' className='bio container d-flex align-items-center z-0 p-5 h-100'>
            <div className=' d-flex flex-row p-5 align-items-center justify-content-center'>
                <div className='img-container d-flex align-items-center justify-content-center z-1n rounded w-100 h-100 position-relative'>
                    <div className='shape' />
                    <img className='round-img position-relative z-index-1' alt='me' src={image} />
                </div>
                <div className='description text-start p-5 lh-lg animate__animated animate__fadeIn'>Welcome to my online portfolio! I'm Rp, also known as Raphael Isla. I'm an enthusiastic Software and Mobile App developer who thrives on challenges. Whether working under pressure or leading a team, I'm driven by my passion for crafting web and mobile applications that precisely meet my clients' user requirements.<br/> My toolkit includes Java, MySQL, HTML, CSS, JavaScript, ReactJS, Bootstrap, MongoDB, ExpressJS, and NodeJS. I utilize these technologies to develop cutting-edge system applications.<br/> I believe in crafting sophisticated, scalable, complex, and dynamic systems that adapt to the ever-evolving technology landscape. By aligning these solutions with my skill set, I am confident in meeting and exceeding my clients' requirements.<br/> Let's embark on a journey of innovation together. Explore my portfolio and witness the projects that showcase my dedication to delivering exceptional web solutions.</div>
            </div>
            <RightTitle title={'ABOUT'}/>
        </div>
    )
}

export default About