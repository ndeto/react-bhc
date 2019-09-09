import React from 'react';

import Catalogue from "./components/Catalogue";
import './styles/style.css'
import './styles/bootstrap.css'
import './styles/font-awesome.min.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

class App extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/properties" component={Catalogue}></Route>
                        <Route path="/about" component={About}></Route>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;