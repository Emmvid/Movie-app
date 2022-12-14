import React from "react";
import { Link } from "react-router-dom";
import { RiMovie2Line } from "react-icons/ri";
import "../components/heading.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <span className="logo">
        <RiMovie2Line /> The Movie Page
      </span>
      <ul className="menu">
        <li>
          <Link to="/" className="btn navButtons">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="btn navButtons">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
