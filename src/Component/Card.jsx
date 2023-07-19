import React, { useState, useEffect, useRef } from 'react';
import 'animate.css'; 

function Card({icon, title, content}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const cardRef = useRef(null);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 576);
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return() => window.removeEventListener('resize', handleResize)
    },[])
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    useEffect(() => {
        const options = {
          root: null, // Use the viewport as the root
          threshold: 0.2, // Percentage of element visibility required to trigger the callback
        };
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0) {
                    entry.target.classList.remove('animate__fadeOut');
                    entry.target.classList.add('animate__fadeIn');
                } else {
                    entry.target.classList.remove('animate__fadeIn');
                    entry.target.classList.add('animate__fadeOut');
                }
            });
        }, options);
        
        const currRef = cardRef.current;
        observer.observe(currRef);
        
        return () => {
            observer.unobserve(currRef);
        };
    }, []);
    const cardClasses = `card custom-card p-4-xl p-0 w-100 p-2-lg text-wrap animate__animated border-0  ${
        isSmallScreen ? '' : isHovered ? '' : 'bg-transparent'}`;
    return (
        <div className='col'>
            <div ref={cardRef} className={cardClasses} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{backgroundColor: isSmallScreen ? 'var(--tertiary-color)' : ''}}>
                <div className='card-icon service-color d-flex justify-content-center align-items-center mt-3 mb-3'>{icon}</div>
                <div className='card-body'>
                    <h4 className='service-color fw-bold text-uppercase'>{title}</h4>
                    <hr className='border-4'/>
                    <p className='text-start service-color'>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default Card