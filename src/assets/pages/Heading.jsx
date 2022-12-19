import React from "react";
import { Link } from "react-router-dom";
import { RiMovie2Line } from 'react-icons/ri'
import "../pages/heading.css"

const Heading = ( props ) => {
  return (
    <nav className="nav-container">
      <span className="logo"> <RiMovie2Line /> {props.name}</span>
        <ul className="menu">
          <li>
            <Link to="/" className="btn">{props.home}</Link>
          </li>
          <li>
            <Link to="/about" className="btn">{props.about}</Link>
          </li>
        </ul>
       </nav> 
  );
};

export default Heading;
