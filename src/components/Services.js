import React from 'react';

const Services = () => {
    return (
        <div id='services'>
            {/* <!-- Services area Start --> */}
            <section className="services_area ">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <div className="services_top_area">
                                <h6>Services i offer to my clients</h6>
                                <h2>My Services</h2>
                                <div className="animated-bar"><span></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 services_item_main">

                        {/* <!--   Services single item area    --> */}
                        <div className="col-md-4">
                            <div className="services_items_area">
                                <i className="fa fa-html5" aria-hidden="true"></i>
                                <h5>Design Trends</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        {/* <!--   Services single item area    --> */}
                        <div className="col-md-4">
                            <div className="services_items_area">
                                <i className="fa fa-picture-o" aria-hidden="true"></i>
                                <h5>Design Trends</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        {/* <!--   Services single item area    --> */}
                        <div className="col-md-4">
                            <div className="services_items_area">
                                <i className="fa fa-superpowers" aria-hidden="true"></i>
                                <h5>Design Trends</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        {/* <!--   Services single item area    --> */}
                        <div className="col-md-4">
                            <div className="services_items_area">
                                <i className="fa fa-wordpress" aria-hidden="true"></i>
                                <h5>Design Trends</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        {/* <!--   Services single item area    --> */}
                        <div className="col-md-4">
                            <div className="services_items_area">
                                <i className="fa fa-arrows" aria-hidden="true"></i>
                                <h5>Design Trends</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        {/* <!--   Services single item area    --> */}
                        <div className="col-md-4">
                            <div className="services_items_area">
                                <i className="fa fa-rocket" aria-hidden="true"></i>
                                <h5>Design Trends</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- Services area end --> */}

        </div>
    );
};

export default Services;