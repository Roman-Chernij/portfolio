import React, { Component, Fragment } from 'react';

import './footer-form.css'

export default class FooterForm extends Component {
    render() {
        const {form} = this.props;
        return (
            <Fragment>
                <h3 className="footer-nav__title">{form.title}</h3>
                <p className="footer-form__description">{form.text}</p>
                <form className="footer-form-holder">
                    <input type="email" name="email" className="footer-form-holder__input" placeholder={form.placeholder} />
                    <button type="submit" className="footer-form-holder__btn icon-paper-plane-empty"></button>
                </form>
            </Fragment>
        )
    }
}
