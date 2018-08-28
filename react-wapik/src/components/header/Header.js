import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import Navigation from '../navigation/Navigation';
import Logo from '../logo/Logo';
import NumberPhone from '../number/NumberPhone';

import './header.css'

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    }
  }

  render() {

      const {isOpened} = this.state;


    return (
      <div className="container">
          <div className="header-row">
              <div className="header-left">
                  <Logo logo={this.props.head.logo}/>
                  <NumberPhone phone={this.props.head.numberPhone}/>
              </div>
              <div className="header-right">
                  <div className="started">
                      <NavLink to={'/pricing'} className="started__link" >
                          {
                              this.props.head.btnStart
                          }
                      </NavLink>
                  </div>
                  <Navigation item={this.props.head.navigation} position="header" colaps = {isOpened ? 'nav-mobi_is-opened':'nav-mobi_close'} />
                  <div className="header-mobi-icon">
                    <button className={`header-mobi-icon__item ${isOpened ? 'icon-cancel':'icon-menu'} `} onClick = {this.openMenu}></button>
                  </div>
              </div>
          </div>
      </div>
    )
  }

  openMenu = () => {
    this.setState ({
      isOpened: !this.state.isOpened
    })

  }
}
