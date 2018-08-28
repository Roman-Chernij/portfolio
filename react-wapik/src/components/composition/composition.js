import React from 'react';

import './composition.css'

export default function Composition (props) {

  const {item} = props;

  return (
    <section className="composition">
      <div className="container">
        <h3 className="title">
          <span className="title__head">{item.title}</span>
        </h3>
        <ul className="composition-list">
          {
            item.list.map((elem, index) =>
              <li className="composition-list__item icon-ok-circled2" key={index}>{elem}</li>
            )
          }

        </ul>
      </div>
    </section>
  )
}
