import React, { Component, Fragment } from 'react';
// import { NavLink } from 'react-router-dom';

import Header from './components/header/Header';
import ContactForm from './components/contactForm/ContactForm';
import Download from './components/download/Download';
import Map from './components/map/Map';
import Footer from './components/footer/Footer';

import {contentContact} from './content/contactContent.js'

class Contact extends Component {
    render() {

        return (
            <Fragment>
                <header className="header">
                  <Header head={contentContact} />
                </header>
                <main className="main">
                    <section className="map">
                        <Map
                            zoom={15}
                            center={{lat:42.2597979, lng:-85.5856476}}
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDY1UayxINyoUpV1bUD7ix65gQ7QuEodzk&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<section className="map-holder" style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />} />
                    </section>
                    <ContactForm item={contentContact} />
                    <Download cont={contentContact.download} />
                </main>
                <footer className="footer">
                    <Footer item={contentContact} />
                </footer>
                {/*<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDDxLQpFuVkiY6qq4QziHNHxBd9ddJkAPs&callback=initMap">*/}
                {/*</script>*/}
            </Fragment>
        );
    }
}

export default Contact;
