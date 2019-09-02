import React from 'react'

const NewLetter = () =>
    (<>
        <div className="newsletter text-center py-lg-5">
        <div className="container py-5">
            <h3 className="heading-agileinfo">Get <span className="text-white">Notified</span></h3>
            <div className="newsletter-inner">
                <p className="text-light py-4">Please leave your email below if you would like to recieve updates from
                    us
                </p>
            </div>
            <div className="newsright pt-5">
                <form action="#" method="post" className="d-flex">
                    <label className="align-self-center">
                        <i className="fas fa-envelope" aria-hidden="true"></i>
                    </label>
                    <input className="form-control" type="email" placeholder="Enter your email..." name="email"
                           required="" />
                        <input className="form-control" type="submit" value="Subscribe" />
                </form>
            </div>

        </div>
    </div>
        </>
        )

export default NewLetter