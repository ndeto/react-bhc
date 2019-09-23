import React from 'react'
import Login from "./Login";
import Head from "../Head";
import Banner from "../Banner";


class AdminLogin extends React.Component {

    render() {
        return (
            <div>
                <Head/>
                <Banner/>
                <Login/>
            </div>
        )
    }

}

export default AdminLogin