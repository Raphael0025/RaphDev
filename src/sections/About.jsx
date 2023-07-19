import React, {useState, useEffect, useRef} from 'react'
import RightTitle from '../Component/RightTitle'
import Title from '../Component/Title'
import image from '../assets/images/xmas2022.jpg'
import 'animate.css';

function About() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const imgContainerRef = useRef(null);
    const textStartRef = useRef(null);
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

        const observer2 = new IntersectionObserver((entries) => {
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
    
        const imgContainerCurrRef = imgContainerRef.current;
        observer.observe(imgContainerCurrRef);
    
        const textStartCurrRef = textStartRef.current;
        observer.observe(textStartCurrRef);
    
        return () => {
            observer2.unobserve(imgContainerCurrRef);
            observer.unobserve(textStartCurrRef);
        };
    }, []);
    return (
        <div id='about' className={` bio container d-flex align-items-center z-0 ${isSmallScreen ? 'p-0' : 'p-5 h-100'}`}>
            <div className={`d-flex ${isSmallScreen ? 'flex-column p-2' : 'flex-row p-3'} align-items-center justify-content-center`}>
                {isSmallScreen ? <Title title={'ABOUT'} /> : <RightTitle title={'ABOUT'}/>}
                <div ref={imgContainerRef} className={`animate__animated img-container d-flex align-items-center justify-content-center ${isSmallScreen ? 'p-3' : 'p-0'} z-1n rounded w-100 h-100 position-relative`}>
                    <div className='shape' />
                    <img className='round-img position-relative z-index-1' alt='me' src={image} />
                </div>
                <div ref={textStartRef} className={`text-start ${isSmallScreen ? 'p-3' : 'p-5'} lh-base animate__animated animate__fadeIn`}>Welcome to my online portfolio! I'm Rp, also known as Raphael Isla. I'm an enthusiastic Software and Mobile App developer who thrives on challenges. Whether working under pressure or leading a team, I'm driven by my passion for crafting web and mobile applications that precisely meet my clients' user requirements.<br/> My toolkit includes Java, MySQL, HTML, CSS, JavaScript, ReactJS, Bootstrap, MongoDB, ExpressJS, and NodeJS. I utilize these technologies to develop cutting-edge system applications.<br/> I believe in crafting sophisticated, scalable, complex, and dynamic systems that adapt to the ever-evolving technology landscape. By aligning these solutions with my skill set, I am confident in meeting and exceeding my clients' requirements.<br/> Let's embark on a journey of innovation together. Explore my portfolio and witness the projects that showcase my dedication to delivering exceptional web solutions.</div>
            </div>
        </div>
    )
}

export default About