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
        <div  id='feed' className={`feedback d-flex flex-column justify-content-center align-items-center z-1n ${isSmallScreen ? 'p-1 mb-5' : 'p-5'}`}>
            <div>
                <Title title={'FEEDBACK'}/>
            </div>
            <div className=' container-lg container-xxl ps-2 pe-2 ps-2-lg pe-2-lg'>
                <SliderComp />
            </div>
        </div>
    )
}

export default Feedback