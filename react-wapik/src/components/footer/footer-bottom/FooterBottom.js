import React from 'react';


import './footer-bottom.css'

export default function FooterBottom (props) {

    const {text} = props,
        {social} = props;

    let titleVal = new Date();
    return(
        <div className="footer-bottom">
            <div className="footer-bottom-text">
                <p>{`${text} ${titleVal.getFullYear()}`}</p>
            </div>
            <div className="footer-bottom-social">
                <ul className="footer-bottom-social-list">
                    {
                        social.map((item, index) =>
                            <li className="footer-bottom-social-list__item" key={index}>
                                <a href={item.src} className={`footer-bottom-social-list__link ${                                     item.name === 'twitter' ? 'icon-twitter':
                                    item.name === 'facebook' ? 'icon-facebook':
                                        item.name === 'instagram' ? 'icon-camera-alt':
                                            item.name === 'dribbble' ? 'icon-dribbble-2':
                                                item.name === 'github' ? 'icon-github': ' '}`}>{item.name}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}