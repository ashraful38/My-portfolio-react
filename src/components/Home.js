import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-scroll';
import Typed from "react-typed"


const Home = () => {
    return (
        <div id='home'>
            <div className='home'>
                <div className="banner-text">
                    <h1 className='welcome'><span>Welcome</span></h1>
                    <h1 className='animation-text'>
                        <Typed
                            strings={[
                                    "I'm a Full Stack Developer",
                                    "I Love Software Development",
                                    "I'm love to work react",
                            ]}
                            typeSpeed={150}
                            backSpeed={100}
                            loop
                        />
                    </h1>
                    <p className='mt-4 fs-4'>Live in Dhaka , Bangladesh</p>
                    <Link className='d-block' to="contact" spy={true} smooth={true} offset={0} duration={500}><button className='hireMe-btn'>Hire Me</button></Link>
                    <div className='angle'>
                        <Link className='cssAnimationProperty' to="/about"><FontAwesomeIcon className=' text-white fs-1 mt-5' icon={faAnglesDown} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;