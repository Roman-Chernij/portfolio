import React, { Component } from 'react';

import './servises.css';

class Servises extends Component {
    render () {

        let servises = this.props.item;
        return (
            <section className="servises">
                <div className="container">
                    <div className="servises-inner">
                    {
                        servises.map((item, index) =>
                            <div className="servises__item" key={index}>
                                <div className="servises-holder">
                                    <h3 className={`servises-holder__title ${item.classIcons}`}>{item.title}</h3>
                                    <p className="servises-holder__description">{item.description}</p>
                                </div>
                            </div>
                        )
                    }
                    </div>
                </div>
            </section>
        )
    }
}

export default Servises;
