import React, {useEffect, useRef} from 'react'
import 'animate.css'; 

function ProjectTile({image, title, siteUrl}) {
    const imageContainerRef = useRef(null);
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
        const currRef = imageContainerRef.current;
        observer.observe(currRef);
        return () => {
            observer.unobserve(currRef);
        };
    }, []);
    return (
        <div ref={imageContainerRef} className='animate__animated image-container d-flex align-items-center justify-content-center' style={{ backgroundImage: `url(${image})`}}>
            <a href={`${siteUrl}`} target='_blank' rel="noopener noreferrer"  style={{'color': 'var(--text)'}}>
                <div className='overlay'>
                    <div className='overlay-content'>
                        <h4 className='text-decoration-underline text-uppercase fw-bold title_animate'>{title}</h4>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProjectTile