import { faFacebookF, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import Hamburger from 'hamburger-react';

const MobileMenu = () => {
    const [isOpen, setOpen] = useState(false)
    const [show, setShow] = useState(false)

     const handleAddToCard = () => {
        if(show === true){
            setShow(false)
        }
        else{
            setShow(true)
        }
     }
     console.log(show);

    return (
        <div>
            <div className='MobileResponsive'>
                <div className='logoMobile'>
                    <Link>Ashraful</Link>
                    <ul>
                        <li>
                            {/* <NavLink to="#"> <FontAwesomeIcon icon={faCoffee} /></NavLink> */}
                            <NavLink to="#"> <FontAwesomeIcon icon={faFacebookF} /></NavLink>
                            <NavLink to="#"><FontAwesomeIcon icon={faTwitter} /></NavLink>
                            <NavLink to="#"><FontAwesomeIcon icon={faGithub} /></NavLink>
                            <NavLink to="#"><FontAwesomeIcon icon={faEnvelope} /></NavLink>
                            <NavLink   to="#"><FontAwesomeIcon icon={faPhone} /></NavLink>
                        </li >
                        <div onClick={() => handleAddToCard()} >
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </div>
                    </ul>
                </div>
            </div>
            <nav className='menu_area'>
            { show ? <ul>
                    <li>
                        <Link to="home" spy={true} smooth={true} offset={0} duration={500} >Home</Link>
                    </li>
                    <li>
                        <Link  to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link  to="services" spy={true} smooth={true} offset={0} duration={500}  >Services</Link>
                    </li>
                    <li>
                        <Link  to="wroks" spy={true} smooth={true} offset={0} duration={500} >Works</Link>
                    </li>
                    <li>
                        <Link  to="contact" spy={true} smooth={true} offset={0} duration={500} >Contact</Link>
                    </li>
                </ul> :  null}
                
            </nav>
        </div>
    );
};

export default MobileMenu;