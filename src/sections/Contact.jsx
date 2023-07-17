import React, {useState, useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser'
import RightTitle from '../Component/RightTitle'
import Title from '../Component/Title'
import 'animate.css'
import { BsFillCursorFill  } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { BiPhone } from 'react-icons/bi'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa' 

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const sendEmail = (e) => {
        e.preventDefault();
        const clientEmail = formData.email;
        const templateParams = {
            to_email: 'rpbisla0025@gmail.com', // Replace with your email address
            from_email: clientEmail,
            name: formData.name,
            subject: formData.subject,
            message: formData.message,
        };
        emailjs.send('service_0gh9hj4', 'template_j22od16', templateParams, '7WhHrpm5BgAiRtffK')
            .then((result) => {
                console.log(result.text);
                setToastMessage('Message Sent Successfully to Developer!');
                setShowToast(true);
                setTimeout(() => {
                    setShowToast(false);
                }, 3000); // Hide the toast after 1 second
            }).catch((error) => {
                console.log(error.text)
                setToastMessage('Message Delivery Failed. Please try again.');
                setShowToast(true);
                setTimeout(() => {
                    setShowToast(false);
                }, 3000); // Hide the toast after 1 second
            })
        e.target.reset()
    };
    const form = useRef();
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 576);
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return() => window.removeEventListener('resize', handleResize)
    },[])
    return (
        <div id='contact' className={`container container-lg d-flex ${isSmallScreen ? 'flex-column p-2' : 'p-5'} align-items-center justify-content-center p-4-lg pb-5`}>
            {isSmallScreen ? <Title title={'CONTACT'} /> : <RightTitle title={'CONTACT'}/>}
            <div className={`d-flex ${isSmallScreen ? 'flex-column-reverse p-2' : 'p-5'} justify-content-center align-items-center text-start`}>
                <div className={`${isSmallScreen ? 'col-12' : 'col-5'} rounded-5 p-3 me-3 fw-semibold fs-4 fs-5-lg`}>
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
                    <div className='d-flex flex-row mt-0 p-1 pb-5 gap-3 align-items-center justify-content-start'>
                        <div className='ia'>
                            <a href='https://www.facebook.com/RpB.Isla' target='_blank' rel='noopener noreferrer' style={{'color': 'var(--text)'}}>
                                <div className='icon'>
                                    <FaFacebookF size={24} />
                                </div>
                            </a>
                        </div>
                        <div className='ia'>
                            <a href='https://www.linkedin.com/in/raphael-pepiton-isla-0025/' target='_blank' rel='noopener noreferrer' style={{'color': 'var(--text)'}}>
                                <div className='icon linked'>
                                    <FaLinkedinIn size={24} />
                                </div>
                            </a>
                        </div>
                        <div className='ia'>
                            <a href='https://twitter.com/04Rap20' target='_blank' rel='noopener noreferrer' style={{'color': 'var(--text)'}}>
                                <div className='icon twitter'>
                                    <FaTwitter  size={24} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className='row g-2 rounded-4 p-3 contact_form z-2'>
                    <div className={`head_form fs-1 fw-bold pb-3 ${isSmallScreen ? 'col-12' : 'col-7'} col-10-lg`}>Let's Talk about your Project!</div>
                    <div className={`${isSmallScreen ? 'col12' : 'col-6'} `}>
                        <input value={formData.name} onChange={handleChange} type='text' className='w-100 mb-3 p-2 lb fw-semibold rounded-3' id='name' name='name' placeholder="Your Name" required />
                    </div>
                    <div className={`${isSmallScreen ? 'col12' : 'col-6'} `}>
                        <input value={formData.email} onChange={handleChange} type='email' className='w-100 mb-3 p-2 lb fw-semibold rounded-3' id='e-mail' name='email' placeholder="Email" required />
                    </div>
                    <div className='col-12 '>
                        <input value={formData.subject} onChange={handleChange} type='text' className='w-100 mb-3 p-2 lb fw-semibold rounded-3' id='subject' name='subject' placeholder='Subject' required />
                    </div>
                    <div className='col-12 '>
                        <textarea value={formData.message} onChange={handleChange} placeholder='Message...' name='message' className='w-100 mb-3 p-2 lb fw-semibold rounded-3' style={{'resize': 'none', 'min-height': '200px'}}></textarea>
                    </div>
                    <div className='justify-content-start d-flex'>
                        <button className={`${isSmallScreen ? 'col-12' : 'col-4'} btn p-3`} id='send' type='submit'>SEND MESSAGE <BsFillCursorFill className='btnIcon' size={24} /></button>
                    </div>
                </form>
            </div>
            {showToast && (
            <div className="toast show fw-medium animate_drop" role="alert" aria-live="assertive" aria-atomic="true" style={{ position: 'fixed', top: '5%', zIndex:'9999', 'background-color': 'var(--primary-color)' }} >
                <div className="toast-body">{toastMessage}</div>
            </div>
            )}
        </div>
    )
}
export default Contact