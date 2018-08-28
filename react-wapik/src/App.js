import React, { Component, Fragment } from 'react';

import './layout/wrapper.css'
import './layout/App.css';
import './layout/index.css';

import './layout/head.css';

import Home from './Home';
import Pricing from './Pricing';
import About from './About';
import Contact from './Contact';
import Error from './Error';


import {BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();



class App extends Component {
  render() {
    return (
        <Router history = {history}>
            <Fragment>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/pricing" component={Pricing}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/error" component={Error}/>
            </Fragment>
        </Router>
    );
  }
}

export default App;
