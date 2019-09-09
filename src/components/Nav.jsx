import React from 'react'
import {Link} from "react-router-dom";



const Nav = () =>

        <>

                <nav className="d-lg-flex">

                    <label htmlFor="drop" className="toggle">Menu</label>
                    <input type="checkbox" id="drop"/>
                    <ul className="menu mt-2 ml-auto">
                        <Link to="/"><li className="mr-lg-4 mr-3">Home</li></Link>
                        <li className="mr-lg-4 mr-3"><a href="services.html">Services</a></li>
                        <li className="mr-lg-4 mr-3">
                            {/*First Tier Drop Down*/}
                            <label htmlFor="drop-2" className="toggle">Dropdown <span className="fa fa-angle-down"
                                                                                      aria-hidden="true"></span>
                            </label>
                            <a href="/">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                            <input type="checkbox" id="drop-2"/>
                            <ul className="inner-ul">
                                <li><Link to="/about">About</Link></li>
                                <li><a href="index.html">Agents</a></li>
                                <li><a href="index.html">Partners</a></li>
                            </ul>
                        </li>
                        <Link to="/properties"><li className="mr-lg-4 mr-3 active">Properties</li></Link>
                        <li className="mr-lg-4"><a href="contact.html">Contact</a></li>
                    </ul>
                    <div className="login-icon mt-2">
                        <a className="user" href="#popup3"><span className="fa fa-user-circle-o"
                                                                 aria-hidden="true"></span></a>
                    </div>
                </nav>

        </>



export default Nav