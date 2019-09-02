import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Banner extends React.Component{
    render(){
        return (
            <>
                <div className="banner">
                    <header>
                        <nav className="navbar navbar-expand-lg navbar-light bg-gradient-secondary">
                            <h1>
                                <a className="navbar-brand text-white" href="index.html">
                                    <img src={require('./images/logo.png')}  width="250px" alt="Brand Haven Consultants"/>
                                </a>
                            </h1>
                            <button className="navbar-toggler ml-md-auto" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-lg-auto text-center">
                                    <li className="nav-item active  mr-3 mt-lg-0 mt-3">
                                        <Router>
                                        <Link to="/about">Home
                                            <span className="sr-only">(current)</span>
                                        </Link>
                                        </Router>
                                    </li>
                                    <li className="nav-item mr-3 mt-lg-0 mt-3">
                                        <a className="nav-link" href="about.html">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="team.html">Team</a>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </header>

                    <div className="container">

                        <div className="banner-text">
                            <div className="slider-info">
                                <h3>BRAND HAVEN CONSULTANTS</h3>
                                <a className="btn btn-primary mt-lg-5 mt-3 agile-link-bnr" href="about.html"
                                   role="button">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Banner