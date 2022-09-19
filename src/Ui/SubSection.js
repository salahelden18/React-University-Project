import React from "react";
import NavBar from "./NavBar";
import "./SubSction.css";

const SubSection = (props) => {
  return (
    <section className="sub-header">
      <NavBar />
      <h1>{props.title}</h1>
    </section>
  );
};

export default SubSection;
