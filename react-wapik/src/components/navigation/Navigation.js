import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import './navigation.css';

class Navigation extends Component {
    render () {

        let navValue = this.props.item,

            navigation = <ul className={`nav-list ${"nav-list_" +this.props.position }`}>
                                {
                                    navValue.map((item, index) =>
                                        <li className="nav-list__item" key={index}>
                                            <NavLink to={
                                                (item === 'home') ? '/':
                                                    (item === 'about us')? '/about':
                                                        (item === 'pricing')? '/pricing':
                                                            (item === 'contact us')? '/contact':'/error'
                                            } className="nav-list__link" activeClassName="nav-list__link_active" exact>
                                                {
                                                    item
                                                }
                                            </NavLink>
                                        </li>
                                    )
                                }

                        </ul>;
        return (
            <nav className={`nav ${this.props.colaps}`}>
                {navigation}
            </nav>
        )
    }
}

export default Navigation;
