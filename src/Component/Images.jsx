import React from 'react'

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
    },
    {
        id: 2,
        url: image1,
        webUrl: 'https://raphael0025.github.io/',
    },
    {
        id: 3,
        url: image2,
        webUrl: 'https://landing-page-taupe-sigma-81.vercel.app/',
    },
    {
        id: 4,
        url: image3,
        webUrl: 'https://geometry-web.vercel.app/',
    },
    {
        id: 5,
        url: image4,
        webUrl: 'https://modiform-unofficial.vercel.app/',
    },
    {
        id: 6,
        url: image5,
        webUrl: 'https://react-calculator-nine-lime.vercel.app/',
    },
    {
        id: 7,
        url: image6,
        webUrl: 'https://quote-generator-three-dun.vercel.app/',
    },
    {
        id: 8,
        url: image7,
        webUrl: 'https://clock-react-gamma.vercel.app/',
    },
]

function Images() {
    return (
        <>
            {images.map((image, index) => (
                <div key={index} className='image-container d-flex align-items-center justify-content-center' style={{ backgroundImage: `url(${image.url})`}}>
                    <div className='overlay'>
                        <div className='overlay-content'>
                            <h2>ko</h2>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Images


// import image8 from '../assets/projects/drum-machine.png'
// import image9 from '../assets/projects/markdown.png'
// import image10 from '../assets/projects/gallery.png'
// import image11 from '../assets/projects/registration.png'
// import image12 from '../assets/projects/registration2.png'
// import image13 from '../assets/projects/calculator.png'
// import image14 from '../assets/projects/tutorial.png'
// import image15 from '../assets/projects/tribute.png'
// import image16 from '../assets/projects/magazine.png'
// import image17 from '../assets/projects/penguin.png'
// import image18 from '../assets/projects/quiz.png'
// import image19 from '../assets/projects/grade.png'
// import image20 from '../assets/projects/login.png'
// import image21 from '../assets/projects/ferris-wheel.png'
// import image22 from '../assets/projects/skyline.png'
 // {
    //     id: 9,
    //     url: image8,
    //     webUrl: 'https://drum-machine-ri.vercel.app/',
    // },
    // {
    //     id: 10,
    //     url: image9,
    //     webUrl: 'https://marked-preview-ri.vercel.app/',
    // },
    // {
    //     id: 11,
    //     url: image10,
    //     webUrl: 'https://gallery-css.vercel.app/',
    // },
    // {
    //     id: 12,
    //     url: image11,
    //     webUrl: 'https://survey-form-weld.vercel.app/',
    // },
    // {
    //     id: 13,
    //     url: image12,
    //     webUrl: 'https://registration-form-seven-woad.vercel.app/',
    // },
    // {
    //     id: 14,
    //     url: image13,
    //     webUrl: 'https://calculator-app-sand-beta.vercel.app/',
    // },
    // {
    //     id: 15,
    //     url: image14,
    //     webUrl: 'https://simple-tutorial-page.vercel.app/',
    // },
    // {
    //     id: 16,
    //     url: image15,
    //     webUrl: 'https://tribute-site-swart.vercel.app/',
    // },
    // {
    //     id: 17,
    //     url: image16,
    //     webUrl: 'https://simple-magazine-app.vercel.app/',
    // },
    // {
    //     id: 18,
    //     url: image17,
    //     webUrl: 'https://animated-penguin.vercel.app/',
    // },
    // {
    //     id: 19,
    //     url: image18,
    //     webUrl: 'https://simple-quiz-app-three.vercel.app/',
    // },
    // {
    //     id: 20,
    //     url: image19,
    //     webUrl: 'https://simple-grade-app.vercel.app/',
    // },
    // {
    //     id: 21,
    //     url: image20,
    //     webUrl: 'https://simple-login-form-indol.vercel.app/',
    // },
    // {
    //     id: 22,
    //     url: image21,
    //     webUrl: 'https://ferris-wheel-three.vercel.app/',
    // },
    // {
    //     id: 23,
    //     url: image22,
    //     webUrl: 'https://skyline-site-ten.vercel.app/',
    // },