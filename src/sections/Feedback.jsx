import React from 'react'
import Title from '../Component/Title'
import Images from '../Component/Images'

function Feedback() {
    return (
        <div  id='feed' className='feedback d-flex flex-column justify-content-center align-items-center z-1n p-5'>
            <div>
                <Title className='z-1n' title={'FEEDBACK'}/>
            </div>
            <div className='container d-flex flex-wrap justify-content-center align-items-center flex-row '>
                <Images />
                <Images />
                <Images />
                <Images />

                <Images />
                <Images />
                <Images />
                <Images />
            </div>
        </div>
    )
}

export default Feedback