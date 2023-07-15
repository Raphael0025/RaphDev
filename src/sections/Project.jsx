import React from 'react'
import Title from '../Component/Title'
import Images from '../Component/Images'

function Project() {
    return (
        <div id='projects' className='projects d-flex flex-column justify-content-center align-items-center z-1 p-5'>
            <div>
                <Title className='z-1n' title={'PROJECTS'}/>
            </div>
            <div className='container d-flex flex-wrap justify-content-center align-items-center flex-row '>
                <Images />
            </div>
            <div className='d-flex align-items-end justify-content-end p-4 w-75'>
                hello See More 
            </div>
        </div>
    )
}

export default Project