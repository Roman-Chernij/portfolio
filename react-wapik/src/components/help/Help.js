import React from 'react';

import { NavLink } from 'react-router-dom';

import './help.css'

export default function Help (props) {

  const {help} = props;

  return (
    <section className="help">
      <div className="container help-container">
        <h3 className="title icon-cd-1">
          <span className="title__head">{help.title}</span>
        </h3>
        <p className="help__description">{help.description}</p>
        <NavLink to="/contact" className="help__link">{help.email}</NavLink>
      </div>
    </section>
  )
}
