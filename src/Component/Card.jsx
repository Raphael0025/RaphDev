import React, {useState, useEffect} from 'react'
import 'animate.css';

function Card({icon, title, content}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
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
    const cardClasses = `card custom-card p-4-xl p-0 w-100 p-2-lg text-wrap animate__animated animate__fadeIn border-0  ${
        isSmallScreen ? '' : isHovered ? '' : 'bg-transparent'}`;
    return (
        <div className='col'>
            <div className={cardClasses} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{backgroundColor: isSmallScreen ? 'var(--tertiary-color)' : ''}}>
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