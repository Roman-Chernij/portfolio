import React from 'react';

import './template.css'

export default function Template (props) {

    const {
        title,
        subtitle,
        image,
        descriptionTitle,
        descriptionText,
        arr} = props.item;
    return (
        <section className="template">
            <div className="container">
                <h3 className="title">
                    <span className="title__head">{title}</span>
                    {subtitle}
                </h3>
                <div className="template-wrap">
                    <div className="template-wrap-col">
                        <div className="template__image">
                            <img src={image} alt=""/>
                        </div>
                    </div>
                    <div className="template-wrap-col">
                        <div className="template-inner">
                            <h3 className="template-inner__title">{descriptionTitle}</h3>
                            <p className="template-inner__description">{descriptionText}</p>
                            <ul className="template-inner-list">
                                {
                                    arr.map((item, index) =>
                                        <li className="template-inner-list__item icon-ok-circled2" key={index}>{item}</li>
                                    )
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
