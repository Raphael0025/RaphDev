import React, {useState} from 'react';
import {BsHouseFill, BsHouse, BsBriefcaseFill, BsBriefcase, BsXDiamondFill, BsXDiamond, BsPersonFill, BsPerson, BsChatQuoteFill, BsChatQuote, BsEnvelopeFill, BsEnvelope} from 'react-icons/bs'

function SideBar () {
    const [isHover, setHover] = useState(null)
    const [isSelected, setSelected] = useState('home')

    const handleMouse = (itm) => {
        setHover(itm)
    }

    const handleMouseLeave = () => {
        setHover(null);
    };

    const handleClick = (itm) => {
        if (isSelected === itm) {
            setSelected(null);
        } else {
            setSelected(itm);
            scrollToSection(itm);
        }
    };
    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
            <div className='nav d-flex justify-content-center p-3 rounded rounded-4'>
                <nav className='side h-100 d-flex flex-column  justify-content-evenly'>
                    
                    <div className='nav-items' onMouseEnter={() => handleMouse('home')} onMouseLeave={handleMouseLeave} onClick={() => handleClick('home')}>
                        
                        { isHover === 'home' ? <><BsHouseFill className='itm ' size={32} /><span className='txt'>Home</span> </> : isSelected === 'home' ? <BsHouseFill className='itm ' size={32} /> : <BsHouse size={32} />}
                        </div>
                    
                    <div className='nav-items' onMouseEnter={() => handleMouse('services')} onMouseLeave={handleMouseLeave} onClick={() => handleClick('services')}>
                        { isHover === 'services' ? <><BsBriefcaseFill className='itm ' size={32} /><span className='txt'>Services</span> </> : isSelected === 'services' ? <BsBriefcaseFill className='itm ' size={32} /> : <BsBriefcase size={32} />}
                    </div>

                    <div className='nav-items' onMouseEnter={() => handleMouse('projects')} onMouseLeave={handleMouseLeave} onClick={() => handleClick('projects')}>
                        { isHover === 'projects' ? <><BsXDiamondFill className='itm ' size={32} /><span className='txt'>Projects</span> </> : isSelected === 'projects' ? <BsXDiamondFill className='itm ' size={32} /> : <BsXDiamond size={32} />}
                    </div>

                    <div className='nav-items' onMouseEnter={() => handleMouse('about')} onMouseLeave={handleMouseLeave} onClick={() => handleClick('about')}>
                        { isHover === 'about' ? <><BsPersonFill className='itm ' size={32} /><span className='txt'>About Me</span> </> : isSelected === 'about' ? <BsPersonFill className='itm ' size={32} /> : <BsPerson size={32} />}
                    </div>

                    <div className='nav-items' onMouseEnter={() => handleMouse('feed')} onMouseLeave={handleMouseLeave} onClick={() => handleClick('feed')}>
                        { isHover === 'feed' ? <><BsChatQuoteFill className='itm ' size={32} /><span className='txt'>Testimonials</span> </> : isSelected === 'feed' ? <BsChatQuoteFill className='itm ' size={32} /> : <BsChatQuote size={32} />}
                    </div>

                    <div className='nav-items' onMouseEnter={() => handleMouse('contact')} onMouseLeave={handleMouseLeave} onClick={() => handleClick('contact')}>
                        { isHover === 'contact' ? <><BsEnvelopeFill className='itm ' size={32} /><span className='txt'>Contact Me</span> </> : isSelected === 'contact' ? <BsEnvelopeFill className='itm ' size={32} /> : <BsEnvelope size={32} />}
                    </div>
                </nav>
            </div>
    )
}

export default SideBar
