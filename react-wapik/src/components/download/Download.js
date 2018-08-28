import React from 'react';

import { NavLink } from 'react-router-dom';

import './download.css'

export default function Download (props) {

  const {cont, page} = props;
  let pageId = page ? `download_${page}`: '';

  return (
    <section className={`download ${pageId}`} style={{backgroundImage: `url(${cont.img})`}}>
      <div className="container">
        <div className="download-wrap">
          <div className="download-col">
            <h2 className="download__title">{cont.title}</h2>
            <span className="download__subtile">{cont.subTitle}</span>
          </div>
          <div className="download-col download-col_greedy">
          <NavLink to='/error' className="download__link">{cont.link}</NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}
