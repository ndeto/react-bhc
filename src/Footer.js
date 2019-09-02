import React from 'react'

const Footer = () =>
    (<>
        <footer id="footer" class="py-5">
            <div class="container">
                <div class="row  py-lg-5 text-center">
                    <div class="text-center col-md-12 footer_grid1 mt-lg-0 mt-4 py-5">
                        <h5>Get in Touch</h5>
                        <div class="fv3-contact">
                            <span class="fas fa-envelope-open mr-2"></span>
                            <p>
                                <a href="mailto:info@bhc.co.ke">info@bhc.co.ke</a>
                            </p>
                        </div>
                        <div class="fv3-contact my-2">
                            <span class="fas fa-phone-volume mr-2"></span>
                            <p>+254 725 913 813</p>
                        </div>
                        <div class="fv3-contact">
                            <span class="fas fa-home mr-2"></span>
                            <p>Ridgeways, Kiambu,<br />
                                Next to Shell Petrol</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="cpy-right text-center py-4">
            <p class="text-white">© 2019 Brand Haven Consultants. All rights reserved | Design by
                <a href="https://zerone.co.ke"> Zerone</a>
            </p>
        </div>

        </>
)


export default Footer