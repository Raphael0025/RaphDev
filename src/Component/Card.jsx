import React from 'react'
import 'animate.css';

function Card({icon, title, content}) {
    return (
        <div className='custom-card p-5 text-wrap animate__animated animate__fadeIn'>
            <div className='card-icon d-flex justify-content-center align-items-center mt-3 mb-3'>{icon}</div>
            <h3 className='header mt-2 mb-3 text-uppercase'>{title}</h3>
            <hr />
            <p className='text-start text-wrap '>{content}</p>
        </div>
    )
}

export default Card