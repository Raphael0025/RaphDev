import React, {useEffect, useState} from 'react'
import Title from '../Component/Title'
import SliderComp from '../Component/SliderComp' 

function Feedback() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 576);
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return() => window.removeEventListener('resize', handleResize)
    },[])
    return (
        <div  id='feed' className={`feedback d-flex flex-column justify-content-center align-items-center z-1n ${isSmallScreen ? 'p-1 mb-3' : 'p-5'}`}>
            <div className='pb-2'>
                <Title title={'FEEDBACK'}/>
                <figcaption className={`text-start blockquote-footer ${isSmallScreen ? 'fs-6 px-3 pt-3' : 'fs-5'}`} style={{color: 'var(--text)'}}>View and read some of these remarkable testimonials shared by my gratified clients.</figcaption>
            </div>
            <div className={`container ps-2 pe-2 ${isSmallScreen ? 'py-3' : 'py-2'}`}>
                <SliderComp />
            </div>
        </div>
    )
}

export default Feedback