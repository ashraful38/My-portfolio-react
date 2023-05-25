import React from 'react';
import { Link } from 'react-scroll';
import profile from '../images/ashraful1.jpg'
// import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header_main_area'>
            <div className="container-fluid">
                <div className='header_text_area'>
                    <div className='profile_area'>
                        <img src={profile} alt="profile" />
                        <h3 className='text-white mt-4 fs-1 fw-bold '>Ashraful Alam shah</h3>
                    </div>
                    <nav className='menu_area'>
                        <ul>
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
                        </ul>
                    </nav>
                    {/* <Button variant="primary">Primary</Button> */}
                    <div className='socil_icon_area'>
                        <ul>
                            <li>
                                {/* <NavLink to="#"> <FontAwesomeIcon icon={faCoffee} /></NavLink> */}
                                <NavLink to="#"> <FontAwesomeIcon icon={faFacebookF} /></NavLink>
                                <NavLink to="#"><FontAwesomeIcon icon={faTwitter} /></NavLink>
                                <NavLink to="#"><FontAwesomeIcon icon={faGithub} /></NavLink>
                                <NavLink to="#"><FontAwesomeIcon icon={faEnvelope} /></NavLink>
                                <NavLink to="#"><FontAwesomeIcon icon={faPhone} /></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;