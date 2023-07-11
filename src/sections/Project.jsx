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

export default Project