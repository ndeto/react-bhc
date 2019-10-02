import React from 'react'
import  { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'


class Login extends React.Component {

    state = {
        email: '',
        password: ''
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.localStorage.getItem('auth')

            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        };
        try {
            const fetchResponse = await fetch('https://bhcapi.herokuapp.com', settings);
            const data = await fetchResponse.json();
            if (!fetchResponse.ok) {
                alert(fetchResponse.statusText);
            }
            if (fetchResponse.ok) {
                console.log(data);
                window.localStorage.setItem('auth', data.auth_token);
                this.history.push("/admin/home");
            }
        } catch (e) {
            return e;
        }
    };

    render() {
        return (
            <>
                {/*popup for login*/}
                <div id="popup3" class="popup-effect">
                    <div class="popup">
                        <div class="login px-sm-4 mx-auto mw-100">
                            <h5 class="text-center mb-4">Login to Estate Town</h5>
                            <h6 class="text-center mb-4" id="error"></h6>
                            <form onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                    <label class="mb-2">Email address</label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder=""
                                        required="required"
                                        value={this.state.email}
                                        onChange={event => this.setState({email: event.target.value})}
                                    />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with
                                        anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label class="mb-2">Password</label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="exampleInputPassword1"
                                        placeholder=""
                                        required=""
                                        value={this.state.password}
                                        onChange={event => this.setState({password: event.target.value})}
                                    />
                                </div>
                                <button type="submit" class="btn btn-primary submit mt-2">Login</button>
                                <p class="text-center mt-2">
                                    <a href="#popup4"> Don't have an account?</a>
                                </p>
                            </form>
                        </div>

                        <a class="close" href="#">&times;</a>
                    </div>
                </div>
                {/*popup for login*/}

            </>

        );
    }
}



export default Login