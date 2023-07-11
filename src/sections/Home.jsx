import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import {BsDownload} from 'react-icons/bs'
import resume from '../assets/docu/Raphael-Resume.pdf'

function Home() {
    const [text, setText] = useState("Freelance software Developer");
    useEffect(() => {
        const reverseAnimationDelay = 2000; // Delay before text change (in milliseconds)
        const typingDuration = 100; // Duration of typing animation (in milliseconds)
        const texts = [
            " software Developer",
            " Front-End Developer"
        ];
        let currentIndex = 0;
        const typeAnimation = () => {
            const targetText = texts[currentIndex];
            let currentText = "";
            let textIndex = 0;
            const typeNextCharacter = () => {
                currentText += targetText[textIndex];
                setText(currentText);
                textIndex++;
                if (textIndex < targetText.length) {
                setTimeout(typeNextCharacter, typingDuration);
                } else {
                setTimeout(reverseAnimation, reverseAnimationDelay);
                }
            };
            typeNextCharacter();
        };
        const reverseAnimation = () => {
            let currentText = texts[currentIndex];
            let textIndex = currentText.length - 1;
            const deleteNextCharacter = () => {
                currentText = currentText.slice(0, -1);
                setText(currentText);
                textIndex--;
                if (textIndex >= 0) {
                setTimeout(deleteNextCharacter, typingDuration);
                } else {
                currentIndex = (currentIndex + 1) % texts.length;
                typeAnimation();
                }
            };
            deleteNextCharacter();
        };
        typeAnimation();
    }, []);
    
    const handleBtn = () => {
        window.open(resume, '_blank');
    };

    return (
        <div id='home' className='home d-flex h-100'>
            <div className='inner-home d-flex flex-column justify-content-center align-items-center'>
                <h5 className='animate__animated animate__lightSpeedInRight'>Hey there, I'm</h5>
                <h1 className='name animate__animated animate__lightSpeedInLeft'><span>RAPHAEL</span><span> ISLA</span></h1>
                <h5 id="typing-text">Freelance {text}</h5>
                
                <div className='row col-11 align-items-start justify-content-center'>
                    <div className='col-1 ia'>
                        <div className='icon'>
                            <FaFacebookF className='' size={24} />
                        </div>
                        
                    </div>
                    <div className='col-1 ia'>
                        <div className='icon'>
                            <FaLinkedinIn className='' size={24} />
                        </div>
                    </div>
                    <div className='col-1 ia'>
                        <div className='icon twitter'>
                            <FaTwitter className='' size={24} />
                        </div>
                    </div>
                
                    <div className='col-2 d-flex justify-content-center align-items-center p-0'>
                        <button onClick={handleBtn} className='button p-2 pe-3 ps-3'> Resume<BsDownload className='ms-2' size={24}/> </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home