import React from "react";
import FacilitiesCol from "./FacilitiesCol";
import Title from "./Title";
import Library from "../images/library.png";
import BasketBall from "../images/basketball.png";
import Cafeteria from "../images/cafeteria.png";
import "./FacilitiesSection.css";

const FacilitiesSection = () => {
  return (
    <section className="facilities">
      <Title
        title="Our Facilities"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          laborum aliquid quasi"
      />
      <div className="row">
        <FacilitiesCol
          image={Library}
          title="World Class Library"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum harum dolorem soluta aliquid ex"
        />
        <FacilitiesCol
          image={BasketBall}
          title="Larget Playground"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum harum dolorem soluta aliquid ex"
        />
        <FacilitiesCol
          image={Cafeteria}
          title="Testy And Healthy Food"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum harum dolorem soluta aliquid ex"
        />
      </div>
    </section>
  );
};

export default FacilitiesSection;
