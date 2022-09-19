import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Image from "../images/logo.png";

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <Link to="/">
        <img src={Image} alt="logo" />
      </Link>
      <div
        className="nav-links"
        id="navLinks"
        style={{ right: show ? "0" : "-200px" }}
      >
        <i
          className="fa-sharp fa fa-solid fa-xmark"
          onClick={() => setShow(false)}
        ></i>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/course">
              Course
            </Link>
          </li>
          <li>
            <Link className="link" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <i className="fa-solid fa fa-bars" onClick={() => setShow(true)}></i>
    </nav>
  );
};

export default NavBar;
