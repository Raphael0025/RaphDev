import React from 'react'
import 'animate.css';

function Title({title}) {
    return (
        <div className='container container-sm w-100 p-0 ps-0 pe-0 m-0 mt-0 title animate__animated animate__fadeInDown'>{title}</div>
    )
}

export default Title