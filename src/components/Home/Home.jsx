import React from "react";
import NavBar from "../../Ui/NavBar";
import "./Home.css";
import CenterContent from "./CenterContent";
import Title from "../../Ui/Title";
import CourseCol from "../../Ui/CourseCol";
import CampusCol from "./CampusCol";
import Washington from "../../images/washington.png";
import London from "../../images/london.png";
import NewYork from "../../images/newyork.png";
import FacilitiesCol from "../../Ui/FacilitiesCol";

import TestimonialsCol from "./TestimonialsCol";
import User2 from "../../images/user2.jpg";
import User1 from "../../images/user1.jpg";
import Button from "../../Ui/Button";
import CourseSection from "../../Ui/CourseSection";
import FacilitiesSection from "../../Ui/FacilitiesSection";

const Home = () => {
  return (
    <>
      <section className="header">
        <NavBar />
        <CenterContent />
      </section>
      <CourseSection />
      <section className="campus">
        <Title
          title="Our Global Campus"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        laborum aliquid quasi"
        />
        <div className="row">
          <CampusCol image={London} title="LONGON" />
          <CampusCol image={NewYork} title="New York" />
          <CampusCol image={Washington} title="WASHINGTON" />
        </div>
      </section>
      {/* facilities */}
      <FacilitiesSection />
      {/* testimonials */}
      <section className="testimonials">
        <Title
          title="What Our Student Says"
          paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          aliquam ad"
        />
        <div className="row">
          <TestimonialsCol
            image={User1}
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Provident numquam nobis vero nesciunt in ad, sint, labore saepe
                dolorum ratione nihil, enim itaque quaerat hic animi vel ea
                harum doloremque."
            name="Christine Berkley"
          />
          <TestimonialsCol
            image={User2}
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Provident numquam nobis vero nesciunt in ad, sint, labore saepe
                dolorum ratione nihil, enim itaque quaerat hic animi vel ea
                harum doloremque."
            name="David Byer"
          />
        </div>
      </section>
      {/* Call To Action  */}
      <section class="cta">
        <h1>
          Enroll For Our Various Online Courses
          <br />
          Anywhere Form The World
        </h1>
        <Button route="/contact">CONTACT US</Button>
      </section>
    </>
  );
};

export default Home;
