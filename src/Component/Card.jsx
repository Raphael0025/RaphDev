import React, {useState} from 'react'
import 'animate.css';

function Card({icon, title, content}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const cardClasses = `card custom-card p-4 text-wrap animate__animated animate__fadeIn border-0  ${
        isHovered ? '' : 'bg-transparent'
    }`;
    return (
        <div className={cardClasses} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='card-icon service-color d-flex justify-content-center align-items-center mt-3 mb-3'>{icon}</div>
            <div className='card-body'>
                <h4 className='service-color fw-bold text-uppercase'>{title}</h4>
                <hr className='border-4'/>
                <p className='text-start service-color'>{content}</p>
            </div>
        </div>
    )
}

export default Card