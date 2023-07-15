import React from 'react'
import Title from '../Component/Title'
import SliderComp from '../Component/SliderComp'

function Feedback() {
    return (
        <div  id='feed' className='feedback d-flex flex-column justify-content-center align-items-center z-1n p-5'>
            <div>
                <Title title={'FEEDBACK'}/>
            </div>
            <div className='container ps-5 pe-5'>
                <SliderComp />
            </div>
        </div>
    )
}

export default Feedback