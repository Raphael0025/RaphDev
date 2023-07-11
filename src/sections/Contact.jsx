import React from 'react'
import RightTitle from '../Component/RightTitle'
import 'animate.css';
import { BsFillCursorFill } from 'react-icons/bs';

function Contact() {
    return (
        <div id='contact' className=' container d-flex align-items-center justify-content-center p-5 h-100'>
            <div className=' d-flex justify-content-center align-items-center text-start p-5'>
                <form className='row g-2'>
                    <div className='col-6 form-floating'>
                        <input type='text' className='form-control ' id='name'  placeholder="John Doe" required />
                        <label for='name' className='form-label'>Full Name</label>
                    </div>

                    <div className='col-6 form-floating'>
                        <input type='email' className='form-control ' id='e-mail'  placeholder="name@example.com" required />
                        <label for='e-mail' className='form-label'>Email</label>
                    </div>

                    <div className='col-12 form-floating'>
                        <input type='text' className='form-control ' id='subject' placeholder='Subject' required />
                        <label for='subject' className='form-label'>Subject</label>
                    </div>

                    <div className='col-12 form-floating'>
                        <textarea placeholder='Message...' className='form-control ' style={{'resize': 'none', 'min-height': '300px'}}></textarea>
                        <label className='form-label' for='message'>Message...</label>
                    </div>
                    <div className=' justify-content-end align-items-end d-flex'>
                        <button className=' col-3 btn p-3' id='send' type='submit'>SEND MESSAGE <BsFillCursorFill size={24} /></button>
                    </div>
                </form>
            </div>
            <RightTitle title={'CONTACT'}/>
        </div>
    )
}

export default Contact