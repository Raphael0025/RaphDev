import React, { useEffect, useRef } from 'react';
import 'animate.css';

function RightTitle({ title }) {
    const fadeInRef = useRef(null);

    useEffect(() => {
        const options = { root: null, threshold: 0.2, };

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

        const currRef = fadeInRef.current;
        observer.observe(currRef);

        return () => {
        observer.unobserve(currRef);
        };
    }, []);

    return <p className="rotated r-title animate__animated" ref={fadeInRef}>{title}</p>;
}

export default RightTitle;
