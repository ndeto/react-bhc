import React from 'react'

const Register = () =>
    <>

         {/*popup for register*/}
        <div id="popup4" class="popup-effect">
            <div class="popup">
                <div class="login px-sm-4 mx-auto mw-100">
                    <h5 class="text-center mb-4">Register Now</h5>
                    <form action="#" method="post">
                        <div class="form-group">
                            <label>Full Name</label>

                            <input type="text" class="form-control" id="validationDefault01" placeholder="" required=""/>
                        </div>
                        <div class="form-group">
                            <label>Phone Number</label>
                            <input type="text" class="form-control" id="validationDefault02" placeholder="" required=""/>
                        </div>

                        <div class="form-group">
                            <label class="mb-2">Password</label>
                            <input type="password" class="form-control" id="password1" placeholder="" required=""/>
                        </div>
                        <div class="form-group">
                            <label>Confirm Password</label>
                            <input type="password" class="form-control" id="password2" placeholder="" required=""/>
                        </div>

                        <button type="submit" class="btn btn-primary submit">Register</button>
                        <p class="text-center mt-3">
                            <a href="#">By clicking Register, I agree to your terms</a>
                        </p>
                    </form>
                </div>
                <a class="close" href="#">&times;</a>
            </div>
        </div>
        {/*//popup for register*/}

    </>

export default Register