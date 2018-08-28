import React, { Component } from 'react';

import Form from '../form/Form';

import './contactForm.css';

import './decor-line-godisontal.png';
import './decor-line-vertical.png';

 class contactForm extends Component {

    render () {

        const {contact, numberPhone, footer} = this.props.item;

        const {form, formBtn} = contact;

        return (
            <section className="contact">
                <div className="container">
                    <h2 className="title">
                        <span className="title__head title__head_pricing">{contact.title}</span>
                        {contact.subTitle}
                    </h2>
                    <div className="contact-wrap">
                        <div className="contact-wrap__col contact-wrap__col-form">
                            <Form item={form} btn={formBtn} />
                        </div>
                        <div className="contact-wrap__col">
                            <div className="contact-holder">
                                <div className="contact-inner">
                                    <h3 className="contact-holder__title">Headquarter</h3>
                                    <ul className="contact-list">
                                        <li className="contact-list__item icon-location">
                                            <address className="contact-list__address">{footer.address}</address>
                                        </li>
                                        <li className="contact-list__item icon-phone">
                                            <a href={`tel:${numberPhone.link}`} className="contact-list__link contact-list__link_tel" >{numberPhone.value}</a>
                                        </li>
                                        <li className="contact-list__item icon-mail-alt">
                                            <a href={`mailto:${footer.email}`} className="contact-list__link contact-list__link_email" >{footer.email}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default contactForm
