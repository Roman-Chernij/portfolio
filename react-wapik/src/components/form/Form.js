import React, { Component } from 'react';

import './form.css'

// import './tr'

export default class Form extends Component {

    render() {

        const {item} = this.props;
        const {btn} = this.props;

        let arr = [];

        for (let i = 0; i < item.length; i++) {
            let r = {},
                type = item[i].toLocaleLowerCase() === 'email' ? 'email':
                       item[i].toLocaleLowerCase() === 'phone' ? 'number':
                       item[i].toLocaleLowerCase() === 'message' ? '':'text';
            r.placeholder = item[i];
            r.type = type;

            arr[i] = r
        }

        const markup = arr.map((item, index) => {
                if (item.type === '') return (
                    <div className="contact-form-field" key={index}>
                        <textarea className="contact-form__input" name={item.placeholder} placeholder={item.placeholder}></textarea>
                    </div>
                );
                if (item.type !== '') return (
                    <div className="contact-form-field" key={index}>
                        <input className="contact-form__input" name={item.placeholder} type={item.type} placeholder={item.placeholder} />
                    </div>
                )
        });

        return (
            <form className="contact-form">
                { markup }

                <button className="contact-form__btn" type="submit">{btn}</button>
            </form>
        )
    }
}