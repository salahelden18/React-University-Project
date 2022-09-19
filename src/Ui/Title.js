import React from "react";
import "./Title.css";

const Title = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
    </>
  );
};

export default Title;
