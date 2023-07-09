import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Home() {
    return (
        <div className='home d-flex h-100'>
            <div className='inner-home d-flex flex-column justify-content-center align-items-center'>
                <h5>Hey there, I'm</h5>
                <h1 className='animate__animated animate__lightSpeedInLeft'>RAPHAEL ISLA</h1>
                <h4>Freelance software Developer</h4>
                
                <div className='row col-12 align-items-start justify-content-center'>
                <div className='col-1 ia'>
                    <div className='icon'>
                        <FaFacebookF className='' size={28} />
                    </div>
                    
                </div>
                <div className='col-1 ia'>
                    <div className='icon'>
                        <FaLinkedinIn className='' size={28} />
                    </div>
                </div>
                <div className='col-1 ia'>
                    <div className='icon'>
                        <FaTwitter className='' size={28} />
                    </div>
                </div>
                
                    <div className='col-3 d-flex justify-content-center align-items-center'>
                        <button >Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home