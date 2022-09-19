import React from "react";
import "./About.css";
import AboutImage from "../../images/about.jpg";
import Button from "../../Ui/Button";
import SubSection from "../../Ui/SubSection";

const About = () => {
  return (
    <>
      <SubSection title="About Us" />
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We are the wolrd's largest usinversity</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati sint omnis porro quas ducimus nihil, minima,
              consequatur, quod minus placeat iste laborum ullam atque?
              Quibusdam odio esse blanditiis est hic. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam ad quis fuga asperiores
              iusto optio odio nulla, a rem sunt illo fugit eaque voluptatem
              laborum, consequuntur doloribus nobis ipsum voluptatum. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Corporis quae
              aut repellendus sequi aliquam autem, quam nisi eius cupiditate
              magni, fugiat praesentium facere accusantium pariatur, ab
              dignissimos nam in quod.
            </p>
            <Button route="/" classes="red-btn">
              Explore
            </Button>
          </div>
          <div className="about-col">
            <img src={AboutImage} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
