import React, { Component} from 'react';

import './PricingPlan.css';


// type: 'Basic',
// price: '$199',
// month: 'month',
// list: ['Justo Fringilla', 'Mollis Sit Nullam', 'Ultricies Purus Amet', 'Cras Inceptos'],
// btn: 'Select Plan'

class PricingPlan extends Component {
    render() {
        let pricing = this.props.item.info;
        return (
            <div className="pricing-inner">
                <div className="pricing-wrap" >

                {
                    pricing.map((item, index)=>
                        <div className="pricing-holder" key={index}>
                            <span className="pricing-holder__type">{item.type}</span>
                            <h3 className="pricing-holder__price">
                                {item.price}
                                <small className="pricing-holder__month">{item.month}</small>
                            </h3>
                            <ul className="pricing-holder-list" >
                            {
                                item.list.map((list, index) =>
                                    <li className="pricing-holder-list__item" key={index}>{list}</li>
                                )
                            }
                            </ul>
                            <button className="pricing-holder__btn">{item.btn}</button>
                        </div>

                    )
                }
                </div>
                <p>{this.props.item.bottom}</p>
            </div>
        )
    }
}

export default PricingPlan;
