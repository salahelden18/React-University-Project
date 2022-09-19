import React from "react";
import "./CampusCol.css";

const CampusCol = (props) => {
  return (
    <div className="campus-col">
      <img src={props.image} alt={props.title} />
      <div className="layer">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default CampusCol;
