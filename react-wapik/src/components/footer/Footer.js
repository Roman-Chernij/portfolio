import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import FooterNav from './footer-nav/FooterNav';
import FooterForm from './footer-form/FooterForm';
import FooterBottom from './footer-bottom/FooterBottom';

import './footer.css';

export default class Footer extends Component {


    // constructor (props) {
    //     super(props);
    // }

    render() {
        const {item} = this.props;

        return (
            <div className="container">
                <div className="footer-top">
                    <div className="footer-col footer-info">
                        <ul>
                            <li className="footer-info__item">
                                <NavLink className="footer-info__link footer-logo" to='/'>{this.props.item.logo}</NavLink>
                            </li>
                            <li className="footer-info__item">
                                <NavLink className="footer-info__link footer-email" to='/'><span>@:</span>{this.props.item.footer.email}</NavLink>
                            </li>
                            <li className="footer-info__item">
                                <a href={this.props.item.numberPhone.link} className="footer-info__link footer-number"><span>p:</span>{this.props.item.numberPhone.value}</a>
                            </li>
                            <li className="footer-info__item">
                                <NavLink to='/contact' className="footer-info__link footer-address">
                                    <address><span>a:</span>{this.props.item.footer.address}</address>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col footer-nav">
                        <FooterNav nav ={item.navigation} title={item.footer.navTitle} />
                    </div>
                    <div className="footer-col footer-sub-nav">
                        <FooterNav nav ={item.footer.others} title={item.footer.othersTitle} />
                    </div>
                    <div className="footer-col footer-form">
                        <FooterForm form={item.footer.newsletter} />
                    </div>
                </div>
                <FooterBottom text={this.props.item.footer.rights} social={this.props.item.footer.social} />
            </div>
        )
    }

}
