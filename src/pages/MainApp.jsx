import React from 'react';
import SideBar from '../Component/SideBar'
import Home from '../sections/Home'
import Services from '../sections/Service'
import Project from '../sections/Project'
import Contact from '../sections/Contact'
import About from '../sections/About'
import Feedback from '../sections/Feedback'

function MainApp() {
    return (
        <div className=""> 
            <SideBar />
            <Home />
            <Services />
            <Project />
            <About />
            <Feedback />
            <Contact />
        </div>
    );
}

export default MainApp;
