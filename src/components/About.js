import React from 'react';
import { Link } from 'react-router-dom';
import aboutpic from '../images/ashraful2.jpg'


const About = () => {
    return (
        <div id='about'>
            <section className='About-area section-padding'>
                <div className="container-fuild">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <div className="about">
                                <h2>Get to know me</h2>
                                <h1 className='mt-4 mb-4 fs-1 fw-blod'>About Me</h1>
                                <div className="animated-bar"><span></span></div>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-5 align-items-center about_padding">
                        <div className="col-lg-5 col-md-12">
                            <div className="about_top">
                                <img src={aboutpic} alt="Photos" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="about_bottom">
                                <div className="about_bottom_top">
                                    <h4 className='who'>Who am i?</h4>
                                    <h3 className='fw-blod fs-1'>I'm Md. Ashraful Alam Shah, a Frontend Developer</h3>
                                    <p className="text- fs-5 pe-4">
                                        My objective is to work in Computer Science and Engineering position to apply my academic knowledge and skills to work on innovative and target-oriented projects. Looking for an entry level web developer position in a reputable company where I can use my educational background to develop my skills.
                                    </p>
                                </div>
                                <div className="about_bottom_bottom">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="about_single_item">
                                                <p><span>Name :</span> Ashraful Alam Shah </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about_single_item">
                                                <p><span>Mail :</span><a href="mailto:ashrafullimon38@gmail.com "> ashrafullimon38@gmail.com </a></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about_single_item">
                                                <p><span>Age :</span> 24 </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about_single_item">
                                                <p><span>From :</span> Dinajpur,Bangladesh </p>
                                            </div>
                                        </div>
                                    </div>

                                    <Link to="/" className="btn_area">Download CV</Link>

                                </div>

                            </div>
                        </div>
                       
                    </div>



                </div>

            </section>
        </div>
    );
};

export default About;