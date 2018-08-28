import  React from 'react';

import './team.css';

export default function Team (props) {
    let {title, subtitle, holder} = props.item;
    return(
        <section className="team">
            <div className="container">
                <h3 className="title">
                    <span className="title__head">{title}</span>
                    {subtitle}
                </h3>
                <div className="team-wrap">
                    {
                        holder.map((item, index)=>
                            <div className="team-wrap__item" key={index}>
                                <div className="team-holder">
                                    <div className="team-holder__image">
                                        <img src={item.image} alt={item.name}/>
                                    </div>
                                    <h4 className="team-holder__name">{item.name}</h4>
                                    <span className="team-holder__post">{item.post}</span>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </section>
    )

}