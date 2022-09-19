import React from "react";
import "./FacilitiesCol.css";

const FacilitiesCol = (props) => {
  return (
    <div className="facilities-col">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default FacilitiesCol;
