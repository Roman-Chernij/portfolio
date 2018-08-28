import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import './logo.css';

class Logo extends Component {
    render () {
        return (
            <h1 className="logo">
                <NavLink to="/" className="logo__link" >
                    {
                        this.props.logo
                    }
                </NavLink>
            </h1>
        )
    }
}

export default Logo;