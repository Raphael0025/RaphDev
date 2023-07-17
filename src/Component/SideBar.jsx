import React, { useState, useEffect } from 'react';
import { BsHouseFill, BsHouse, BsBriefcaseFill, BsBriefcase, BsXDiamondFill, BsXDiamond, BsPersonFill, BsPerson, BsChatQuoteFill, BsChatQuote, BsEnvelopeFill, BsEnvelope } from 'react-icons/bs';

function SideBar() {
    const [isHover, setHover] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [sizeIcon, setIconSize] = useState(32)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 576);
        };

        setIconSize(window.innerWidth < 576 ? 20 : 32)

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouse = (itm) => {
        setHover(itm);
    };

    const handleMouseLeave = () => {
        setHover(null);
    };

    const handleClick = (itm) => {
        scrollToSection(itm);
    };

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="nav d-flex justify-content-center p-3 rounded rounded-4 z-3">
        <nav className="side justify-content-evenly">
            <div
            className="nav-items"
            onMouseEnter={() => handleMouse('home')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('home')}
            >
            {isSmallScreen ? (
                isHover === 'home' ? (
                <BsHouseFill className="itm" size={{sizeIcon}} />
                ) : (
                <BsHouse className="itm" size={{sizeIcon}} />
                )
            ) : (
                <>
                {isHover === 'home' ? (
                    <>
                    <BsHouseFill className="itm" size={{sizeIcon}} />
                    <span className="txt">Home</span>
                    </>
                ) : (
                    <BsHouse className="itm" size={{sizeIcon}} />
                )}
                </>
            )}
            </div>

            <div
            className="nav-items"
            onMouseEnter={() => handleMouse('services')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('services')}
            >
            {isSmallScreen ? (
                isHover === 'services' ? (
                <BsBriefcaseFill className="itm" size={{sizeIcon}} />
                ) : (
                <BsBriefcase className="itm" size={{sizeIcon}} />
                )
            ) : (
                <>
                {isHover === 'services' ? (
                    <>
                    <BsBriefcaseFill className="itm" size={{sizeIcon}} />
                    <span className="txt">Services</span>
                    </>
                ) : (
                    <BsBriefcase className="itm" size={{sizeIcon}} />
                )}
                </>
            )}
            </div>

            <div
            className="nav-items"
            onMouseEnter={() => handleMouse('projects')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('projects')}
            >
            {isSmallScreen ? (
                isHover === 'projects' ? (
                <BsXDiamondFill className="itm" size={{sizeIcon}} />
                ) : (
                <BsXDiamond className="itm" size={{sizeIcon}} />
                )
            ) : (
                <>
                {isHover === 'projects' ? (
                    <>
                    <BsXDiamondFill className="itm" size={{sizeIcon}} />
                    <span className="txt">Projects</span>
                    </>
                ) : (
                    <BsXDiamond className="itm" size={{sizeIcon}} />
                )}
                </>
            )}
            </div>

            <div
            className="nav-items"
            onMouseEnter={() => handleMouse('about')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('about')}
            >
            {isSmallScreen ? (
                isHover === 'about' ? (
                <BsPersonFill className="itm" size={{sizeIcon}} />
                ) : (
                <BsPerson className="itm" size={{sizeIcon}} />
                )
            ) : (
                <>
                {isHover === 'about' ? (
                    <>
                    <BsPersonFill className="itm" size={{sizeIcon}} />
                    <span className="txt">About Me</span>
                    </>
                ) : (
                    <BsPerson className="itm" size={{sizeIcon}} />
                )}
                </>
            )}
            </div>

            <div
            className="nav-items"
            onMouseEnter={() => handleMouse('feed')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('feed')}
            >
            {isSmallScreen ? (
                isHover === 'feed' ? (
                <BsChatQuoteFill className="itm" size={{sizeIcon}} />
                ) : (
                <BsChatQuote className="itm" size={{sizeIcon}} />
                )
            ) : (
                <>
                {isHover === 'feed' ? (
                    <>
                    <BsChatQuoteFill className="itm" size={{sizeIcon}} />
                    <span className="txt">Testimonials</span>
                    </>
                ) : (
                    <BsChatQuote className="itm" size={{sizeIcon}} />
                )}
                </>
            )}
            </div>

            <div
            className="nav-items"
            onMouseEnter={() => handleMouse('contact')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('contact')}
            >
            {isSmallScreen ? (
                isHover === 'contact' ? (
                <BsEnvelopeFill className="itm" size={{sizeIcon}} />
                ) : (
                <BsEnvelope className="itm" size={{sizeIcon}} />
                )
            ) : (
                <>
                {isHover === 'contact' ? (
                    <>
                    <BsEnvelopeFill className="itm" size={{sizeIcon}} />
                    <span className="txt">Contact Me</span>
                    </>
                ) : (
                    <BsEnvelope className="itm" size={{sizeIcon}} />
                )}
                </>
            )}
            </div>
        </nav>
        </div>
    );
}

export default SideBar;
