import React from 'react';
import {BsHouseFill, BsHouse, BsBriefcaseFill, BsBriefcase, BsXDiamondFill, BsXDiamond, BsPersonFill, BsPerson, BsChatQuoteFill, BsChatQuote, BsEnvelopeFill, BsEnvelope} from 'react-icons/bs'

function SideBar () {
    return (
        <div className='bg-primary nav d-flex justify-content-center align-items-center p-3 rounded rounded-4'>
            <nav>
                <div>
                    <BsHouse size={24} />
                </div>
                <div>
                    <BsBriefcase size={24} />
                </div>
                <div>
                    <BsXDiamond size={24} />
                </div>
                <div>
                    <BsPerson size={24} />
                </div>
                <div>
                    <BsChatQuote size={24} />
                </div>
                <div>
                    <BsEnvelope size={24} />
                </div>
            </nav>
        </div>
    )
}

export default SideBar