import React from "react";
import "./CourseCol.css";

const CourseCol = (props) => {
  return (
    <div className="course-col">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default CourseCol;
