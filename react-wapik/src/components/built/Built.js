import React from 'react';

import './built.css';

export default function Built (props) {
    const {title,
           text,
           image} = props.item;

    return (
        <section className="built" style={{backgroundImage: `url(${image})`}}>
            <div className="container">
                <div className="built-holder">
                    <h3 className="built__title">{title}</h3>
                    <p className="built__description">{text}</p>
                </div>
            </div>
        </section>
    )
}
