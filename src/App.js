import React from 'react';

import Catalogue from "./components/Catalogue";
import './styles/style.css'
import './styles/bootstrap.css'
import './styles/font-awesome.min.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import AdminHome from "./components/admin/AdminHome";
import AdminLogin from "./components/admin/AdminLogin";
import ViewProperty from "./components/ViewProperty";
import Contact from "./components/Contact";

require('dotenv').config();


class App extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/properties" component={Catalogue}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route exact path="/admin" component={AdminHome}></Route>
                        <Route path="/property" component={ViewProperty}></Route>
                        <Route path="/admin/login" component={AdminLogin}></Route>
                        <Route path="/contact" component={Contact}></Route>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;