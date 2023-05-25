import React from 'react';

const Contact = () => {
    return (
        <div id='contact' classNameName='contact'>
            {/* <!--    Footer area Start    --> */}
            <section className="footer_area">
                <div className="container">
                    {/* <!-- Blog top area start --> */}
                    <div className="row text-center">
                        <div className="col-md-12">
                            <div className="footer">
                                <h6>Get to know me</h6>
                                <h2>Footer</h2>
                                <div className="animated-bar"><span></span></div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5 footer_bottom">
                        <div className="col-md-7">
                            <h4>Contact Info</h4>
                            <div className="footer_left_area">
                                <form>
                                    <div className="row g-5">
                                        {/* <!-- Form single item area  --> */}
                                        <div className="col-md-6">
                                            <div className="form_group1">
                                                <input type="text" name="name" placeholder="Name"/>
                                            </div>
                                        </div>

                                        {/* <!-- Form single item area  --> */}
                                        <div className="col-md-6">
                                            <div className="form_group1">
                                                <input type="email" name="email" placeholder="Email"/>
                                            </div>
                                        </div>

                                        {/* <!-- Form single item area  --> */}
                                        <div className="col-md-12">
                                            <div className="form_group2">
                                                <input type="number" name="mobail" placeholder="Number"/>
                                            </div>
                                        </div>

                                        {/* <!-- Form single item area  --> */}
                                        <div className="col-md-12">
                                            <div className="form_group2">
                                                <textarea placeholder="Massege"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn_area btn_area2" type="submit">Send Massege</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h4>Contact Info</h4>
                            <div className="footer_right_area">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="footer_right_area_details">
                                            <p>
                                                Always available for freelance work if the right project comes along, Feel free to contact me!
                                            </p>
                                            <div className="footer_items_botttom">

                                                {/* <!-- single item area --> */}
                                                <div className="footer_item_content">
                                                    <p><i className="fa fa-smile-o"></i></p>
                                                    <div className="footer_sub_items">
                                                        <h6>Name</h6>
                                                        <ul><li>Md.Ashraful Alam Shah</li></ul>
                                                    </div>
                                                </div>


                                                {/* <!-- single item area --> */}
                                                <div className="footer_item_content">
                                                    <p><i className="fa fa-envelope-o" ></i></p>
                                                    <div className="footer_sub_items">
                                                        <h6>Mail</h6>
                                                        <ul><li><a href="mailto:ashrafullimon38@gmail.com">..............</a></li></ul>
                                                    </div>
                                                </div>


                                                {/* <!-- single item area --> */}
                                                <div className="footer_item_content">
                                                    <p><i className="fa fa-phone"></i></p>
                                                    <div className="footer_sub_items">
                                                        <h6>Phone</h6>
                                                        <ul><li><a href="tel:01788242645">...............</a></li></ul>
                                                    </div>
                                                </div>

                                                {/* <!-- single item area --> */}
                                                <div className="footer_item_content">
                                                    <p><i className="fa fa-compass" ></i></p>
                                                    <div className="footer_sub_items">
                                                        <h6>Location</h6>
                                                        <ul><li>Dinajpur,Bangladesh</li></ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!--    Footer area End    --> */}
        </div>
    );
};

export default Contact;