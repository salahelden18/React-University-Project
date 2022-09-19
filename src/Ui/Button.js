import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
  return (
    <Link to={props.route} className={`hero-btn ${props.classes}`}>
      {props.children}
    </Link>
  );
};

export default Button;
