import React, { Fragment } from 'react';

import { NavLink } from 'react-router-dom';

import './footer-nav.css'

export default function FooterNav (props) {

    const {nav} = props,
          {title} = props;

    let titleVal = title ? <h3 className="footer-nav__title">{title}</h3>: null;

    return(
        <Fragment>
            {titleVal}
            <ul className="footer-nav-list">
                {
                    nav.map((item, index) =>
                        <li className="footer-nav-list__item" key={index}>
                            <NavLink to={
                                (item === 'home') ? '/':
                                    (item === 'about us')? '/about':
                                        (item === 'pricing')? '/pricing':
                                            (item === 'contact us')? '/contact':'/error'
                            } className="footer-nav-list__link">
                                {
                                    item
                                }
                            </NavLink>
                        </li>
                    )

                }
            </ul>
        </Fragment>


    )
}