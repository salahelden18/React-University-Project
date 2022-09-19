import React from "react";
import CourseSection from "../../Ui/CourseSection";
import FacilitiesSection from "../../Ui/FacilitiesSection";
import SubSection from "../../Ui/SubSection";

const Course = () => {
  return (
    <>
      <SubSection title="Our Courses" />
      <CourseSection />
      <FacilitiesSection />
    </>
  );
};

export default Course;
