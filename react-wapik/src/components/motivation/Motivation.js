import React, { Component } from 'react';

import './motivation.css';

class Motivation extends Component {
    render() {

        let info = this.props.item.info,
            page = this.props.page ? `motivation_${this.props.page}`: '';

        return (
            <section className={`motivation ${page}`}>
                <div className="container">
                    <h3 className="title">
                        <span className="title__head">{this.props.item.title}</span>
                        {this.props.item.subtitle}
                    </h3>
                    <div className="motivation-inner">
                    {
                        info.map((item, index) =>
                            <div className="motivation__item" key={index}>
                                <div className="motivation-holder">
                                    <span className={`${item.classIcons} motivation-holder__icon`}></span>
                                    <h4 className="motivation-holder__title">{item.title}</h4>
                                    <p className="motivation-holder__description">{item.description}</p>
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

export default Motivation;
