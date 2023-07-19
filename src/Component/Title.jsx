import React, {useEffect, useRef} from 'react'
import 'animate.css';

function Title({title}) {
    const titleRef = useRef(null)
    useEffect(()=>{
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting && entry.intersectionRatio > 0){
                    entry.target.classList.remove('animate__fadeOut')
                    entry.target.classList.add('animate__fadeInLeft')
                } else {
                    entry.target.classList.remove('animate__fadeInLeft')
                    entry.target.classList.add('animate__fadeOut')
                }
            })
        })

        const currRef = titleRef.current
        if(currRef){
            observer.observe(currRef)
        }
        return() => {
            if(currRef){
                observer.unobserve(currRef)
            }
        }
    }, [])
    return (
        <div ref={titleRef} className='container container-sm w-100 p-0 ps-0 pe-0 m-0 mt-0 title animate__animated'>{title}</div>
    )
}

export default Title