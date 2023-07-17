import React, {useEffect, useState} from 'react'
import Title from '../Component/Title'
import ProjectTile from '../Component/ProjectTile'
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import image from '../assets/projects/webPortfolio.png'
import image1 from '../assets/projects/lakbay.png'
import image2 from '../assets/projects/watch.png'
import image3 from '../assets/projects/geometry.png'
import image4 from '../assets/projects/modiform.png'
import image5 from '../assets/projects/react-calculator.png'
import image6 from '../assets/projects/quote.png'
import image7 from '../assets/projects/clock-react.png'

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
]
function Project() {
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
        <div id='projects' className={`d-flex flex-column justify-content-center align-items-center z-1 ${isSmallScreen ? 'p-3' : 'p-5'}`}>
            <div className='mb-3'>
                <Title className='z-1n' title={'PROJECTS'}/>
                <figcaption className={`text-start blockquote-footer ${isSmallScreen ? 'fs-6 px-3 pt-3' : 'fs-5'}`} style={{color: 'var(--text)'}}>I invite you to explore and review my recent projects, showcasing my skills and expertise.</figcaption>
            </div>
            <div className='container d-flex flex-wrap justify-content-center align-items-center flex-row '>
                {images.map((image, index) => (
                    <ProjectTile key={index} image={image.url} title={image.projDesc} siteUrl={image.webUrl}/>
                ))}
            </div>
            <div className='d-flex align-items-end justify-content-end p-4 w-75'>
                <Link to='/all-projects' className='fw-bold fs-4 link-btn '>See More <FiArrowRight size={24} className='fw-bolder'/></Link> 
            </div>
        </div>
    )
}

export default Project