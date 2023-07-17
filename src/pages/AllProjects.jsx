import React, {useEffect, useState} from 'react'
import Title from '../Component/Title'
import ProjectTile from '../Component/ProjectTile'
import '../App.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import 'animate.css'; 

import image from '../assets/projects/webPortfolio.png'
import image1 from '../assets/projects/lakbay.png'
import image2 from '../assets/projects/watch.png'
import image3 from '../assets/projects/geometry.png'
import image4 from '../assets/projects/modiform.png'
import image5 from '../assets/projects/react-calculator.png'
import image6 from '../assets/projects/quote.png'
import image7 from '../assets/projects/clock-react.png'
import image8 from '../assets/projects/drum-machine.png'
import image9 from '../assets/projects/markdown.png'
import image10 from '../assets/projects/gallery.png'
import image11 from '../assets/projects/registration.png'
import image12 from '../assets/projects/registration2.png'
import image13 from '../assets/projects/calculator.png'
import image14 from '../assets/projects/tutorial.png'
import image15 from '../assets/projects/tribute.png'
import image16 from '../assets/projects/magazine.png'
import image17 from '../assets/projects/penguin.png'
import image18 from '../assets/projects/quiz.png'
import image19 from '../assets/projects/grade.png'
import image20 from '../assets/projects/login.png'
import image21 from '../assets/projects/ferris-wheel.png'
import image22 from '../assets/projects/skyline.png'

const images = [
    {
        id: 1,
        url: image,
        webUrl: 'https://web-portfolio-phi-amber.vercel.app/',
        projDesc: 'Web Portfolio',
    },
    {
        id: 2,
        url: image1,
        webUrl: 'https://raphael0025.github.io/',
        projDesc: 'Lakbay Pasay Site',
    },
    {
        id: 3,
        url: image2,
        webUrl: 'https://landing-page-taupe-sigma-81.vercel.app/',
        projDesc: 'Apple Wacth Landing Page',
    },
    {
        id: 4,
        url: image3,
        webUrl: 'https://geometry-web.vercel.app/',
        projDesc: 'Geometry Calculator',
    },
    {
        id: 5,
        url: image4,
        webUrl: 'https://modiform-unofficial.vercel.app/',
        projDesc: 'STI Modiform',
    },
    {
        id: 6,
        url: image5,
        webUrl: 'https://react-calculator-nine-lime.vercel.app/',
        projDesc: 'React Calculator',
    },
    {
        id: 7,
        url: image6,
        webUrl: 'https://quote-generator-three-dun.vercel.app/',
        projDesc: 'React Quote Generator',
    },
    {
        id: 8,
        url: image7,
        webUrl: 'https://clock-react-gamma.vercel.app/',
        projDesc: 'Promodoro Clock Technique',
    },
    {
        id: 9,
        url: image8,
        webUrl: 'https://drum-machine-ri.vercel.app/',
        projDesc: 'Drum Machine - ReactJS',
    },
    {
        id: 10,
        url: image9,
        webUrl: 'https://marked-preview-ri.vercel.app/',
        projDesc: 'Marked Down App',
    },
    {
        id: 11,
        url: image10,
        webUrl: 'https://gallery-css.vercel.app/',
        projDesc: 'CSS Gallery App',
    },
    {
        id: 12,
        url: image11,
        webUrl: 'https://survey-form-weld.vercel.app/',
        projDesc: 'Simple Survey App',
    },
    {
        id: 13,
        url: image12,
        webUrl: 'https://registration-form-seven-woad.vercel.app/',
        projDesc: 'Advanced Registration',
    },
    {
        id: 14,
        url: image13,
        webUrl: 'https://calculator-app-sand-beta.vercel.app/',
        projDesc: 'First Web Calculator',
    },
    {
        id: 15,
        url: image14,
        webUrl: 'https://simple-tutorial-page.vercel.app/',
        projDesc: 'Basic Tutorial Page ',
    },
    {
        id: 16,
        url: image15,
        webUrl: 'https://tribute-site-swart.vercel.app/',
        projDesc: 'Sample Tribute Page',
    },
    {
        id: 17,
        url: image16,
        webUrl: 'https://simple-magazine-app.vercel.app/',
        projDesc: 'Simple Magazine Page',
    },
    {
        id: 18,
        url: image17,
        webUrl: 'https://animated-penguin.vercel.app/',
        projDesc: 'Animated Penguin',
    },
    {
        id: 19,
        url: image18,
        webUrl: 'https://simple-quiz-app-three.vercel.app/',
        projDesc: 'Simple Quiz App',
    },
    {
        id: 20,
        url: image19,
        webUrl: 'https://simple-grade-app.vercel.app/',
        projDesc: 'Basic Grade Evaluation',
    },
    {
        id: 21,
        url: image20,
        webUrl: 'https://simple-login-form-indol.vercel.app/',
        projDesc: 'Basic User Login',
    },
    {
        id: 22,
        url: image21,
        webUrl: 'https://ferris-wheel-three.vercel.app/',
        projDesc: 'Animated Ferris Wheel',
    },
    {
        id: 23,
        url: image22,
        webUrl: 'https://skyline-site-ten.vercel.app/',
        projDesc: 'Sky-Line',
    },
]

function AllProjects() { 
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
        <div className='AllProj'>
            <div className={`container projects d-flex flex-column justify-content-center align-items-center ${isSmallScreen ? 'p-3' : 'p-5'}`} >
                <div className='container d-flex justify-content-start align-items-start flex-column'>
                    <Title className='z-1n ps-3 pe-5' title={'PROJECTS'}/>
                    <Link to='/' className={`fw-bold fs-4 link-btn p-2 ${isSmallScreen ? 'ps-0' : 'ps-5'}`}><FiArrowLeft  size={24} className='fw-bolder'/> Go Back</Link> 
                </div>
                <div className={`container d-flex flex-wrap ${isSmallScreen ? 'justify-content-center' : 'justify-content-start px-5'} align-items-center flex-row pt-4 animate__animated animate__fadeIn`}>
                    {images.map((image, index) => (
                        <ProjectTile key={index} image={image.url} title={image.projDesc} siteUrl={image.webUrl}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllProjects