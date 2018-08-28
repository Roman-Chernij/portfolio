import React, { Component} from 'react';

import './NumberPhone.css';

class NumberPhone extends Component {
    render() {
        return (
            <div className="header-phone">
                <a href={`tel:${this.props.phone.link}`} className="header-phone__link icon-phone">{this.props.phone.value}</a>
            </div>
        )
    }
}

export default NumberPhone;