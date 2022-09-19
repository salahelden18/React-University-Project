import React from "react";
import "./TestimonialsCol.css";

const TestimonialsCol = (props) => {
  return (
    <div className="testimonials-col">
      <img src={props.image} alt="" />
      <div>
        <p>{props.text}</p>
        <h3>{props.name}</h3>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
    </div>
  );
};

export default TestimonialsCol;
