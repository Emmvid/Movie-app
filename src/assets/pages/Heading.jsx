import React from "react";
import { Link } from "react-router-dom";
import { RiMovie2Line } from 'react-icons/ri'
import "../pages/heading.css"

const Heading = () => {
  return (
    <nav className="nav-container">
      <span className="logo"> <RiMovie2Line /> The Movie Database</span>
        <ul className="menu">
          <li>
            <Link to="/" className="btn">Home</Link>
          </li>
          <li>
            <Link to="/about" className="btn">About</Link>
          </li>
        </ul>
       </nav> 
  );
};

export default Heading;
