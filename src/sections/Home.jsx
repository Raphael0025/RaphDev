import React from 'react'

function Home() {
    return (
        <div className='home d-flex h-100'>
            <div className='inner-home d-flex flex-column justify-content-center align-items-center'>
                <h5>Hey there, I'm</h5>
                <h1>RAPHAEL ISLA</h1>
                <h4>Freelance software Developer</h4>
                
                <div className='row col-12 align-items-start justify-content-center'>
                    <p className='col-1 '>icon</p>
                    <p className='col-1 '>icon</p>
                    <p className='col-1 '>icon</p>
                    
                    <div className='col-3'>
                        <button >Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home