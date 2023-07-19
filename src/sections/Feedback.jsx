import React, {useEffect, useState, useRef} from 'react'
import Title from '../Component/Title'
import SliderComp from '../Component/SliderComp' 

function Feedback() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const figcaptionRef = useRef(null);
    const containerRef = useRef(null);
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
                if (entry.isIntersecting && entry.intersectionRatio > 0) {
                    entry.target.classList.remove('animate__fadeOut');
                    entry.target.classList.add('animate__fadeIn');
                } else {
                    entry.target.classList.remove('animate__fadeIn');
                    entry.target.classList.add('animate__fadeOut');
                }
            });
        }, options);
    
        const figcaptionCurrRef = figcaptionRef.current;
        observer.observe(figcaptionCurrRef);
    
        const containerCurrRef = containerRef.current;
        observer.observe(containerCurrRef);
    
        return () => {
            observer.unobserve(figcaptionCurrRef);
            observer.unobserve(containerCurrRef);
        };
    }, []);
    return (
        <div  id='feed' className={`feedback d-flex flex-column justify-content-center align-items-center z-1n ${isSmallScreen ? 'p-1 mb-3' : 'p-5'}`}>
            <div className='pb-2'>
                <Title title={'FEEDBACK'}/>
                <figcaption ref={figcaptionRef} className={`animate__animated text-start blockquote-footer ${isSmallScreen ? 'fs-6 px-3 pt-3' : 'fs-5'}`} style={{color: 'var(--text)'}}>View and read some of these remarkable testimonials shared by my gratified clients.</figcaption>
            </div>
            <div ref={containerRef} className={`animate__animated container ps-2 pe-2 ${isSmallScreen ? 'py-3' : 'py-2'}`}>
                <SliderComp />
            </div>
        </div>
    )
}

export default Feedback