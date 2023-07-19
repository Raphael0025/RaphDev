import React, { useEffect, useState, useRef } from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import {BsDownload} from 'react-icons/bs'
import resume from '../assets/docu/Raphael-Resume.pdf'
import 'animate.css'

function Home() {
    const fadeInRef = useRef(null)
    const [isSmallScreen, setIsSmallScreen] = useState(false);
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
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 576);
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return() => window.removeEventListener('resize', handleResize)
    },[])
    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the root
            threshold: 0.2, // Percentage of element visibility required to trigger the callback
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting && entry.intersectionRatio > 0) {
                    entry.target.classList.remove('animate__fadeOutRight')
                    entry.target.classList.add('animate__fadeInRight')
                } else {
                    entry.target.classList.remove('animate__fadeInRight')
                    entry.target.classList.add('animate__fadeOutRight')
                }
            })
        }, options)
        const currRef = fadeInRef.current
        observer.observe(currRef)
        return() => {
            observer.unobserve(currRef)
        }
    }, [])
    return (
        <div id='home' className='home d-flex h-100'>
            <div className='inner-home d-flex flex-column justify-content-center align-items-center'>
                <h5 className='animate__animated animate__lightSpeedInRight'>Hey there, I'm</h5>
                <h1 className='name animate__animated animate__lightSpeedInLeft'><span>RAPHAEL</span><span> ISLA</span></h1>
                <h5 id="typing-text" ref={fadeInRef} className='animate__animated '>Freelance {isSmallScreen ? 'Web Developer' : text}</h5>
                <div className={`row ${isSmallScreen ? 'col-12' : 'col-11'} pt-3 align-items-start justify-content-center`}>
                    <div className={` ${isSmallScreen ? 'col-4' : 'col-1'} ia d-flex justify-content-center`}>
                        <a href='https://www.facebook.com/RpB.Isla' target='_blank' rel='noopener noreferrer' style={{'color': 'var(--text)'}}>
                            <div className='icon' >
                                <FaFacebookF size={24} />
                            </div>
                        </a>
                    </div>
                    <div ref={fadeInRef} className={`animate__animated ${isSmallScreen ? 'col-4' : 'col-1'} ia d-flex justify-content-center`}>
                        <a href='https://www.linkedin.com/in/raphael-pepiton-isla-0025/' target='_blank' rel='noopener noreferrer' style={{'color': 'var(--text)'}}>
                            <div className='icon linked'>
                                <FaLinkedinIn className='' size={24} />
                            </div>
                        </a>
                    </div>
                    <div ref={fadeInRef} className={`animate__animated ${isSmallScreen ? 'col-4' : 'col-1'} ia d-flex justify-content-center`}>
                        <a href='https://twitter.com/04Rap20' target='_blank' rel='noopener noreferrer' style={{'color': 'var(--text)'}}>
                            <div className='icon twitter'>
                                <FaTwitter className='' size={24} />
                            </div>
                        </a>
                    </div>
                    <div ref={fadeInRef} className={`animate__animated ${isSmallScreen ? 'col-12' : 'col-2'} d-flex justify-content-center align-items-center p-0`}>
                        <button onClick={handleBtn} className={`button p-2 ${isSmallScreen ? 'col-10' : 'pe-3 ps-3'}`}> Resume<BsDownload className='ms-2' size={24}/> </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Home