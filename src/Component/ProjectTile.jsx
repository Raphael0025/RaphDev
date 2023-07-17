import React from 'react'
import 'animate.css'; 

function ProjectTile({image, title, siteUrl}) {
    return (
        <div className='image-container d-flex align-items-center justify-content-center' style={{ backgroundImage: `url(${image})`}}>
            <a href={`${siteUrl}`} target='_blank' rel="noopener noreferrer"  style={{'color': 'var(--text)'}}>
                <div className='overlay'>
                    <div className='overlay-content'>
                        <h4 className='text-decoration-underline text-uppercase fw-bold title_animate'>{title}</h4>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProjectTile