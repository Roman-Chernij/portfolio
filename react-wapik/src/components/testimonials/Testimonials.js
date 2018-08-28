import React from 'react';

import './testimonials.css'

export default function Testimonials (props) {

    const {
        name,
        post,
        image,
        descriptionText} = props.item;
    return (
        <section className="testimonials">
            <div className="container">
                <div className="testimonials-wrap">
                    <div className="testimonials-wrap-col">
                        <div className="testimonials-inner">
                            <p className="testimonials-inner__description">{descriptionText}</p>
                            <ul className="testimonials-inner-list">
                                <li className="testimonials-inner-list__name">{name}</li>
                                <li className="testimonials-inner-list__post">{post}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="testimonials-wrap-col">
                        <div className="testimonials__image">
                            <img src={image} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}