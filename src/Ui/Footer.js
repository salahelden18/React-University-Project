import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section class="footer">
      <h4>About Us</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque natus
        numquam et dolore.
        <br />
        Rerum quo sed placeat est, repellat officiis eius, accusantium ratione,
        ad molestiae in! Nihil ea repellat qui?
      </p>
      <div class="icons">
        <i class="fa fa-brands fa-facebook"></i>
        <i class="fa fa-brands fa-twitter"></i>
        <i class="fa fa-brands fa-instagram"></i>
        <i class="fa fa-brands fa-linkedin"></i>
      </div>
      <p>
        Made With <i class="fa-regular fa-heart"></i> By Salahelden
      </p>
    </section>
  );
};

export default Footer;
