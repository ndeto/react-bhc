import React from 'react'


class HomeBanner extends React.Component {
    render() {
        return (
            <>
                {/*banner*/}
                <div className="banner" id="home">
                    <div className="container">
                        <div className="row banner-text">
                            <div className="slider-info col-lg-6">
                                <div className="agileinfo-logo mt-lg-5 pt-md-3">
                                    <h2>Brand Haven Consultants </h2>
                                    <p></p>
                                </div>
                                <a className="btn mr-2 text-capitalize" href="#popup1">read more </a>
                                {/*<a className="btn text-capitalize" href="#popup2">watch video </a>*/}
                            </div>
                            <div className="col-lg-6 col-md-8 mt-lg-0 mt-5 banner-image text-center">
                                <img src="images/home.png" alt="" className="img-fluid"/>
                                <h4 className=" mt-3 text-white text-center">Build Your Dream House </h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/*banner*/}
            </>
        )
    }
}


export default HomeBanner


