import React, { Component, Fragment } from 'react';

import { NavLink } from 'react-router-dom';

import Header from './components/header/Header';
import Motivation from './components/motivation/Motivation';
import Team from './components/team/Team';
import Download from './components/download/Download';
import Footer from './components/footer/Footer';

import {contentAbout} from './content/aboutContent.js'

class About extends Component {
    render() {
        return (
            <Fragment>
                <header className="header header-about">
                  <Header head={contentAbout} />
                </header>
                <main className="main">
                    <section className="head head-about" style={{backgroundImage: `url(${contentAbout.welcome.background})`}}>
                        <div className="container head-container">
                            <div className="haed-wrap">
                                <h2 className="head__title head__title_default">{contentAbout.welcome.title}</h2>
                                <div className="head-btn">
                                    <NavLink to={'/error'} className="head-btn__link" >
                                        {
                                            contentAbout.welcome.btn
                                        }
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Motivation item={contentAbout.motivation} page="about" />
                    <Team item={contentAbout.team} />
                    <Download cont={contentAbout.download} page="about" />
                </main>
                <footer className="footer">
                    <Footer item={contentAbout} />
                </footer>
            </Fragment>
        );
    }
}

export default About;
