import React from 'react'
import Login from "./Login";
import Register from "./Register";


const Footer = () =>
    (<>

            <footer id="footer" className="py-5">
                <div className="container">
                    <div className="row  py-lg-5 text-center">
                        <div className="text-center col-md-12 footer_grid1 mt-lg-0 mt-4 py-5">
                            <h5>Get in Touch</h5>
                            <div className="fv3-contact">
                                <span className="fas fa-envelope-open mr-2"></span>
                                <p>
                                    <a href="mailto:info@bhc.co.ke">info@bhc.co.ke</a>
                                </p>
                            </div>
                            <div className="fv3-contact my-2">
                                <span className="fas fa-phone-volume mr-2"></span>
                                <p>+254 725 913 813</p>
                            </div>
                            <div className="fv3-contact">
                                <span className="fas fa-home mr-2"></span>
                                <p>Ridgeways, Kiambu,<br/>
                                    Next to Shell Petrol</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="cpy-right text-center py-4">
                <p className="text-white">© 2019 Brand Haven Consultants. All rights reserved | Design by
                    <a href="https://zerone.co.ke"> Zerone</a>
                </p>
            </div>

            <Login/>
            <Register/>
        </>
    );


export default Footer