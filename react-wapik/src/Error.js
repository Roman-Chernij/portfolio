import React, { Component, Fragment } from 'react';

import Header from './components/header/Header';
import ErrorHolder from './components/errorHolder/ErrorHolder'
import Footer from './components/footer/Footer';

import {contentError} from './content/errorContent'

class Error extends Component {
    render() {

        return (
            <Fragment>
                <header className="header">
                    <Header head={contentError} />
                </header>
                <main className="main error">
                    <ErrorHolder />
                </main>
                <footer className="footer">
                    <Footer item={contentError} />
                </footer>
            </Fragment>
        );
    }
}

export default Error;
