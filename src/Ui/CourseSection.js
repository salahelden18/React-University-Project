import React from "react";
import CourseCol from "./CourseCol";
import Title from "./Title";
import "./CourseSection.css";

const CourseSection = () => {
  return (
    <section className="course">
      <Title
        title="Courses We Offer"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
    laborum aliquid quasi"
      />
      <div className="row">
        <CourseCol
          title="Intermediate"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Repellendus, blanditiis. Voluptatem deserunt natus quasi quos ipsam
      tenetur sint molestiae nisi sit explicabo, at laboriosam, molestias
      ad quisquam eos aperiam optio."
        />
        <CourseCol
          title="Degree"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Repellendus, blanditiis. Voluptatem deserunt natus quasi quos
      ipsam tenetur sint molestiae nisi sit explicabo, at laboriosam,
      molestias ad quisquam eos aperiam optio."
        />
        <CourseCol
          title="Post Graduation"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Repellendus, blanditiis. Voluptatem deserunt natus quasi quos ipsam
      tenetur sint molestiae nisi sit explicabo, at laboriosam, molestias
      ad quisquam eos aperiam optio."
        />
      </div>
    </section>
  );
};

export default CourseSection;
