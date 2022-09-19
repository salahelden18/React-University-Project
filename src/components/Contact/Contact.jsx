import React from "react";
import Button from "../../Ui/Button";
import SubSection from "../../Ui/SubSection";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <SubSection />
      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
              <i className="fa-solid fa-house-user"></i>
              <span>
                <h5>XYZ Road, ABC Building</h5>
                <p>Lorem ipsum dolor sit, amet consectetur</p>
              </span>
            </div>
            <div>
              <i className="fa-solid fa-phone"></i>
              <span>
                <h5>+1 111111111111</h5>
                <p>Monday To Saturday, 10AM to 6PM</p>
              </span>
            </div>
            <div>
              <i className="fa-solid fa-envelope"></i>
              <span>
                <h5>info@example.com</h5>
                <p>Email us your query</p>
              </span>
            </div>
          </div>
          <div className="contact-col">
            <form action="">
              <input type="text" placeholder="Enter Your Name" required />
              <input type="email" placeholder="Enter Email Address" required />
              <input type="text" placeholder="Enter your Subject" required />
              <textarea rows="8" placeholder="Message" required></textarea>
              <Button route="/" classes="red-btn">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
