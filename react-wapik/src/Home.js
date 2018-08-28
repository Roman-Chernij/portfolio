import React, { Component, Fragment } from 'react';

import Header from './components/header/Header';
import Servises from './components/servises/Servises';
import Motivation from './components/motivation/Motivation';
import Template from './components/template/Template';
import Testimonials from './components/testimonials/Testimonials';
import Built from './components/built/Built';
import PricingPlan from './components/pricing/PricingPlan';
import Composition from './components/composition/composition';
import Help from './components/help/Help';
import Download from './components/download/Download';
import Footer from './components/footer/Footer';

import { NavLink } from 'react-router-dom';

import { contentHome } from './content/homeContent.js';


// style={"background-image: url("+ contentHome.welcome.background +");"}

class Home extends Component {
    render() {
        return (
            <Fragment>
                <header className="header header-home">
                  <Header head={contentHome} />
                </header>
                <main className="main">
                    <section className="head head-home" style={{backgroundImage: `url(${contentHome.welcome.background})`}}>
                        <div className="container head-container">
                            <div className="haed-wrap">
                                <h2 className="head__title head__title_default">{contentHome.welcome.title}</h2>
                                <p className="head__description">{contentHome.welcome.description}</p>
                                <div className="head-btn">
                                    <NavLink to={'/about'} className="head-btn__link" >
                                        {
                                            contentHome.welcome.btn
                                        }
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Motivation item={contentHome.motivation} />
                    <Servises item={contentHome.servises} />
                    <Template item={contentHome.template} />
                    <Testimonials item={contentHome.testimonials} />
                    <Built item={contentHome.built} />
                    <section className="pricing">
                        <div className="container pricing-container">
                            <h2 className="title">
                                <span className="title__head title__head_pricing">{contentHome.price.title}</span>
                                {contentHome.price.subtitle}
                            </h2>
                            <PricingPlan item={contentHome.pricing} />
                        </div>
                    </section>
                    <Composition item={contentHome.composition} />
                    <Help help = {contentHome.help} />
                    <Download cont={contentHome.download} />
                </main>
                <footer className="footer">
                    <Footer item={contentHome} />
                </footer>
            </Fragment>
        );
    }
}

export default Home;
