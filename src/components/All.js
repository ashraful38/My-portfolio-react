import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import MobileMenu from './MobileMenu';
import Services from './Services';
import Works from './Works';

const All = () => {
    return (
        <div className='all_container'>
            <MobileMenu></MobileMenu>
            <Home></Home>
            <About></About>
            <Services></Services>
            <Works></Works>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default All;