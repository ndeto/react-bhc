import React from 'react'

const HomeContent = () =>
        <>
             {/*about*/}
            <section class="about py-5" id="about">
                <div class="container py-md-5">
                    <div class="row">
                        <div class="col-lg-3 col-md-5 about-left">
                            <h3 class="heading mb-5">About us</h3>
                            <div class="grid">
                                <h4>120+ <span>Properties</span></h4>
                            </div>
                            <div class="grid my-3">
                                <h4>142 <span class="ml-4">Professionals</span></h4>
                            </div>
                            <div class="grid my-3">
                                <h4>212 <span class="ml-4">Property Sales </span></h4>
                            </div>
                            <div class="grid">
                                <h4>120+ <span>Happy Clients </span></h4>
                            </div>

                        </div>
                        <div class="col-lg-5 col-md-7 about-text mt-md-0 mt-5">
                            <h3>Welcome To BHC</h3>
                            <p class="mt-3">
                                <p>Brand Haven Consultants limited was launched back in 2016 to provide real
                                    estate consultancy services in Kenya and Africa.
                                    The company offers wide range of real estate services ranging from</p>
                                <p>1. Estate Agency.</p>
                                <p>2. Property Management.</p>
                                <p>3. Valuation.</p>
                                <p>4. Financial appraisals on real estate projects.</p>
                                <p>5. Due diligence on property acquisition.</p>
                                <p>6. Project Management.</p>
                                <br/><b>Values:</b><br/>
                                To leverage real estate investments to build wealth in Africa
                                <br/><br/><b>Mission:</b><br/>
                                To be the lead real estate advisors offering technological and feasible advice to
                                our clients.
                            </p>

                        </div>
                        <div class="col-lg-4 col-md-6 about-img">
                            <img src={require("./../images/about.png")} alt="" class="img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>
            {/*about*/}

            {/*why choose us*/}
            <section class="choose bg-light py-5">
                <div class="container py-md-3">
                    <h3 class="heading mb-5"> What are you looking for?</h3>
                    <div class="feature-grids row">
                        <div class="col-lg-3 col-sm-6">
                            <div class="f1 bg-white icon1 p-4">
                                <span class="fa fa-building"></span>
                                <h3 class="my-3">Apartments</h3>
                                <p>Excepteur sint occaecat non proident maximus.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                            <div class="f1 bg-white icon2 p-4">
                                <span class="fa fa-home"></span>
                                <h3 class="my-3">Houses</h3>
                                <p>Excepteur sint occaecat non proident maximus.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                            <div class="f1 bg-white icon3 p-4">
                                <span class="fa fa-dollar"></span>
                                <h3 class="my-3">Properties</h3>
                                <p>Excepteur sint occaecat non proident maximus.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                            <div class="f1 bg-white icon4 p-4">
                                <span class="fa fa-cogs"></span>
                                <h3 class="my-3">Sales</h3>
                                <p>Excepteur sint occaecat non proident maximus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*//why choose us*/}

            {/*Offered Services*/}
            <section class="process py-5" id="services">
                <div class="container py-md-3">
                    <h3 class="heading mb-5">Offered Services</h3>
                    <div class="row process-grids">
                        <div class="col-lg-3 col-md-6 my-lg-4 w3pvt-ab position-relative">
                            <div class="">
                                <img src={require("./../images/ser1.png")} alt="" class="img-fluid rounded-circle" />
                            </div>
                            <h4 class="feed-title my-3">Rental Apartments</h4>
                            <p> Excepteur ut occaecat ipsum proident, sunt int culpa quis. Phasellus lacinia id erat risu quis sunt int dolor.</p>
                        </div>
                        <div class="col-lg-3 col-md-6 my-lg-4 mt-md-0 mt-4 w3pvt-ab position-relative">
                            <div class="">
                                <img src={require("./../images/ser2.png")} alt="" class="img-fluid rounded-circle" />
                            </div>
                            <h4 class="feed-title my-3">Houses For Sale</h4>
                            <p> Excepteur ut occaecat ipsum proident, sunt int culpa quis. Phasellus lacinia id erat risu quis sunt int dolor.</p>
                        </div>
                        <div class="col-lg-3 col-md-6 my-lg-4 mt-sm-5 mt-4 w3pvt-ab position-relative">
                            <div class="">
                                <img src={require("./../images/ser3.png")} alt="" class="img-fluid rounded-circle" />
                            </div>
                            <h4 class="feed-title my-3">Property Sale</h4>
                            <p> Excepteur ut occaecat ipsum proident, sunt int culpa quis. Phasellus lacinia id erat risu quis sunt int dolor.</p>
                        </div>
                        <div class="col-lg-3 col-md-6 mt-lg-4 mt-sm-5 mt-4 w3pvt-ab">
                            <div class="">
                                <img src={require('./../images/ser4.png')} alt="" class="img-fluid rounded-circle" />
                            </div>
                            <h4 class="feed-title my-3">Construction</h4>
                            <p> Excepteur ut occaecat ipsum proident, sunt int culpa quis. Phasellus lacinia id erat risu quis sunt int dolor.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*Offered Services*/}

            {/*video*/}
            <section class="video bg-light py-5" id="video">
                <div class="container">
                    <div class="inner-sec-w3ls py-lg-5 py-3">
                        <div class="row">
                            <div class="col-lg-6 video-right px-lg-5 px-2">
                                <h3 class="tittle-w3">Perfect Business Real Estate Agency</h3>
                                <p class="mt-4">Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit amet when an unknown printer took a galley of type.Vivamus id tempor felis. Cras sagittis mi sit amet malesuada mollis. Mauris porroinit consectetur cursus tortor vel interdum dolorem Lorem int ipsum dolor sit amet.</p>

                            </div>
                            <div class="col-lg-6 video-img mt-lg-0 mt-4">
                                <img src={require('./../images/right.png')} alt="" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*video*/}

            {/*Team*/}
            <section class="section py-5" id="agents">
                <div class="container py-lg-5">
                    <h3 class="heading mb-5"> Our Agents Team</h3>
                    <div class="section_header">
                        <div class="row">
                            <div class="col-md-3 col-sm-6">
                                <div class="teamy_preview">
                                    <img src={require('./../images/team1.jpg')} class="teamy_avatar" alt="The demo photo" />
                                </div>
                                <div class="teamy_content mt-3">
                                    <h3 class="teamy_name">Suzan Lois</h3>
                                    <span class="teamy_post">Estate Agent</span>
                                </div>
                                <div class="teamy_back">
                                    <div class="teamy_back-inner">
                                        <a href="#0" class="social">
                                            <span class="fa fa-facebook"></span>
                                        </a>
                                        <a href="#0" class="social">
                                            <span class="fa fa-twitter"></span>
                                        </a>
                                        <a href="#0" class="social">
                                            <span class="fa fa-envelope-open"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 mt-sm-0 mt-4">
                                <div class="teamy_preview">
                                    <img src={require("./../images/team2.jpg")} class="teamy_avatar" alt="The demo photo" />
                                </div>
                                <div class="teamy_content mt-3">
                                    <h3 class="teamy_name">Dora Caelan</h3>
                                    <span class="teamy_post">Estate Agent</span>
                                </div>
                                <div class="teamy_back">
                                    <div class="teamy_back-inner">
                                        <a href="#0" class="social">
                                            <span class="fa fa-facebook"></span>
                                        </a>
                                        <a href="#0" class="social">
                                            <span class="fa fa-twitter"></span>
                                        </a>
                                        <a href="#0" class="social">
                                            <span class="fa fa-envelope-open"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 mt-md-0 mt-4">
                                <div class="teamy_preview">
                                    <img src={require("./../images/team3.jpg")} class="teamy_avatar" alt="The demo photo" />
                                </div>
                                <div class="teamy_content mt-3">
                                    <h3 class="teamy_name">Rosanna</h3>
                                    <span class="teamy_post">Estate Agent</span>
                                </div>
                                <div class="teamy_back">
                                    <div class="teamy_back-inner">
                                        <a href="#0" class="social">
                                            <span class="fa fa-facebook"></span>
                                        </a>
                                        <a href="#0" class="social">
                                            <span class="fa fa-twitter"></span>
                                        </a>
                                        <a href="#0" class="social">
                                            <span class="fa fa-envelope-open"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 mt-md-0 mt-4">
                                <div class="teamy_preview">
                                    <img src={require("./../images/team4.jpg")} class="teamy_avatar" alt="The demo photo" />
                                </div>
                                <div class="teamy_content mt-3">
                                    <h3 class="teamy_name">Rose Alpha</h3>
                                    <span class="teamy_post">Estate Agent</span>
                                </div>
                                <div class="teamy_back">
                                    <div class="teamy_back-inner">
                                        <a href="#0" class="social">
                                            <span class="fa fa-facebook"></span>
                                        </a>
                                        <a href="#0" class="social">
                                            <span class="fa fa-twitter"></span>
                                        </a>
                                        <a href="#0" class="social">
                                            <span class="fa fa-envelope-open"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Team*/}

            {/*Partners*/}
            <section class="partners py-5" id="partners">
                <div class="container py-md-3">
                    <h3 class="heading text-white mb-5">Our Estate Partners</h3>
                    <div class="inner-sec-w3ls">
                        <div class="sponsers-icon text-center">
                            <ul class="list-unstyled partners-icon row">
                                <li class="col-md-2 col-4">
                                    <i class="fa fa-codepen" aria-hidden="true"></i>
                                </li>
                                <li class="col-md-2 col-4 border-left border-right">
                                    <i class="fa fa-lastfm" aria-hidden="true"></i>
                                </li>
                                <li class="col-md-2 col-4 border-right">
                                    <i class="fa fa-codiepie" aria-hidden="true"></i>
                                </li>
                                <li class="col-md-2 col-4 border-right mt-md-0 mt-3">
                                    <i class="fa fa-drupal" aria-hidden="true"></i>
                                </li>
                                <li class="col-md-2 col-4 border-right mt-md-0 mt-3">
                                    <i class="fa fa-dashcube" aria-hidden="true"></i>
                                </li>
                                <li class="col-md-2 col-4 mt-md-0 mt-3">
                                    <i class="fa fa-skyatlas" aria-hidden="true"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/*Partners*/}
        </>

export default HomeContent

