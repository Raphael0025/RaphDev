import React from 'react'
import RightTitle from '../Component/RightTitle'
import 'animate.css';
import { BsFillCursorFill  } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { BiPhone } from 'react-icons/bi';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Contact() {
    return (
        <div id='contact' className=' container d-flex align-items-center justify-content-center p-5 h-100'>
            <div className=' d-flex justify-content-center align-items-center text-start p-5'>
                <div className='col-5 rounded-5 p-3 me-3 fw-semibold fs-4'>
                    <span className='cntct-dtl'>If you have any questions or If you want to hire me, feel free to contact me, I'll be in touch as soon as possible:</span>
                    <div className='mt-4 d-flex align-items-start '>
                        <IoLocationOutline className=' me-2' size={32} />
                        <div className=' d-block'>
                            <h5 className=' fw-bold'>Address</h5>
                            <p className=' fs-6 fw-medium cntct-dtl'>558 M De Jesus Street, Pasay City</p>
                        </div>
                    </div>
                    <div className='mt-2 d-flex align-items-start'>
                        <BiPhone size={32} className=' me-2' />
                        <div className=' d-block'>
                            <h5 className=' fw-bold'>Phone</h5>
                            <p className='fs-6 fw-medium cntct-dtl'>(+63) 926 960 7368</p>
                        </div>
                    </div>
                    <div className='d-flex flex-row mt-0 p-1 gap-3 align-items-center justify-content-start'>
                        <div className='ia'>
                            <div className='icon'>
                                <FaFacebookF className='' size={24} />
                            </div>
                        </div>
                        <div className='ia'>
                            <div className='icon linked'>
                                <FaLinkedinIn className='' size={24} />
                            </div>
                        </div>
                        <div className=' ia'>
                            <div className='icon twitter'>
                                <FaTwitter className='' size={24} />
                            </div>
                        </div>
                    </div>
                </div>
                <form className='row g-2 rounded-4 p-3 contact_form'>
                    <div className='head_form fs-1 fw-bold pb-3 col-7'>Let's Talk about your Project!</div>
                    <div className='col-6 '>
                        <input type='text' className='w-100 mb-3 p-2 lb fw-semibold rounded-3' id='name'  placeholder="Your Name" required />
                    </div>

                    <div className='col-6 '>
                        <input type='email' className='w-100 mb-3 p-2 lb fw-semibold rounded-3' id='e-mail'  placeholder="Email" required />
                        
                    </div>

                    <div className='col-12 '>
                        <input type='text' className='w-100 mb-3 p-2 lb fw-semibold rounded-3' id='subject' placeholder='Subject' required />
                        
                    </div>

                    <div className='col-12 '>
                        <textarea placeholder='Message...' className='w-100 mb-3 p-2 lb fw-semibold rounded-3' style={{'resize': 'none', 'min-height': '200px'}}></textarea>
                        
                    </div>
                    <div className=' justify-content-start d-flex'>
                        <button className=' col-4 btn p-3' id='send' type='submit'>SEND MESSAGE <BsFillCursorFill className='btnIcon' size={24} /></button>
                    </div>
                </form>
            </div>
            <RightTitle title={'CONTACT'}/>
        </div>
    )
}

export default Contact