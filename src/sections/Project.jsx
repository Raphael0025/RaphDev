import React from 'react'
import Title from '../Component/Title'
import ProjectTile from '../Component/ProjectTile'
import { Link } from 'react-router-dom';

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
    return (
        <div id='projects' className='projects d-flex flex-column justify-content-center align-items-center z-1 p-5'>
            <div>
                <Title className='z-1n' title={'PROJECTS'}/>
            </div>
            <div className='container d-flex flex-wrap justify-content-center align-items-center flex-row '>
                {images.map((image, index) => (
                    <ProjectTile key={index} image={image.url} title={image.projDesc} siteUrl={image.webUrl}/>
                ))}
            </div>
            <div className='d-flex align-items-end justify-content-end p-4 w-75'>
                hello See More 
            </div>
        </div>
    )
}

export default Project