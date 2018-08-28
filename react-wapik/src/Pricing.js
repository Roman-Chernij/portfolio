import React, { Component, Fragment } from 'react';

import Header from './components/header/Header';
import PricingPlan from './components/pricing/PricingPlan';
import Composition from './components/composition/composition';
import Help from './components/help/Help';
import Download from './components/download/Download';
import Footer from './components/footer/Footer';

import {contentPricing} from './content/pricingContent.js';
import './layout/pricing.css';


class Pricing extends Component {
    render() {
        return (
            <Fragment>
                <header className="header">
                  <Header head={contentPricing} />
                </header>
                <main className="main">
                    <section className="head head-pricing">
                        <div className="container pricing-container">
                            <h2 className="title">
                                <span className="title__head title__head_pricing">{contentPricing.price.title}</span>
                                {contentPricing.price.subtitle}
                            </h2>
                            <PricingPlan item={contentPricing.pricing} />
                        </div>
                    </section>
                    <Composition item={contentPricing.composition} />
                    <Help help = {contentPricing.help} />
                    <Download cont={contentPricing.download} />
                </main>
                <footer className="footer">
                    <Footer item={contentPricing} />
                </footer>
            </Fragment>
        );
    }
}

export default Pricing;
