import React, { Component } from 'react';

import './errorHolder.css'

export default class ErrorHolder extends Component {

    render() {
        return (
            <section className="error-holder">
                <div className="container">
                    <h2 className="error__title">error 404</h2>
                    <span className="error__description">Ops! Something went wrong! This page does not exist.</span>
                </div>
            </section>
        )
    }
}


