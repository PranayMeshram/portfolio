import "./Workcard.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const Workcard = (props) => {
  return (
    
    <div className="project-card">
        <img src={props.imgsrc} alt="" />
        <h2 className="project-tittle">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
                <NavLink to={props.view} className="btn">VIEW</NavLink>
                <NavLink to="url.com" className="btn">SOURCE</NavLink>
            </div>
        </div>
    </div>

  )
}

export default Workcard;