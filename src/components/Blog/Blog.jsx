import React from "react";
import SubSection from "../../Ui/SubSection";
import "./Blog.css";
import Certificate from "../../images/certificate.jpg";
import Button from "../../Ui/Button";

const Blog = () => {
  return (
    <>
      <SubSection title="Our Certificate & Online Programs For 2022" />
      <section class="blog-content">
        <div class="row">
          <div class="blog-left">
            <img src={Certificate} alt="certificate" />
            <h2>Our Certificate & Online Programs For 2022</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              repudiandae obcaecati illum laboriosam ipsa numquam totam! Facilis
              labore sint quis inventore consectetur reprehenderit nesciunt
              error, autem, facere minus dolore laboriosam? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Explicabo autem, reiciendis
              sed, fugit error tempora distinctio omnis sequi velit, eveniet
              animi numquam et fuga? Dignissimos molestias numquam consequatur
              provident dicta. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Impedit repudiandae obcaecati illum laboriosam
              ipsa numquam totam! Facilis labore sint quis inventore consectetur
              reprehenderit nesciunt error, autem, facere minus dolore
              laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Explicabo autem, reiciendis sed, fugit error tempora
              distinctio omnis sequi velit, eveniet animi numquam et fuga?
              Dignissimos molestias numquam consequatur provident dicta.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              repudiandae obcaecati illum laboriosam ipsa numquam totam! Facilis
              labore sint quis inventore consectetur reprehenderit nesciunt
              error, autem, facere minus dolore laboriosam? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Explicabo autem, reiciendis
              sed, fugit error tempora distinctio omnis sequi velit, eveniet
              animi numquam et fuga? Dignissimos molestias numquam consequatur
              provident dicta. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Impedit repudiandae obcaecati illum laboriosam
              ipsa numquam totam! Facilis labore sint quis inventore consectetur
              reprehenderit nesciunt error, autem, facere minus dolore
              laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Explicabo autem, reiciendis sed, fugit error tempora
              distinctio omnis sequi velit, eveniet animi numquam et fuga?
              Dignissimos molestias numquam consequatur provident dicta.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              repudiandae obcaecati illum laboriosam ipsa numquam totam! Facilis
              labore sint quis inventore consectetur reprehenderit nesciunt
              error, autem, facere minus dolore laboriosam? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Explicabo autem, reiciendis
              sed, fugit error tempora distinctio omnis sequi velit, eveniet
              animi numquam et fuga? Dignissimos molestias numquam consequatur
              provident dicta. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Impedit repudiandae obcaecati illum laboriosam
              ipsa numquam totam! Facilis labore sint quis inventore consectetur
              reprehenderit nesciunt error, autem, facere minus dolore
              laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Explicabo autem, reiciendis sed, fugit error tempora
              distinctio omnis sequi velit, eveniet animi numquam et fuga?
              Dignissimos molestias numquam consequatur provident dicta.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              repudiandae obcaecati illum laboriosam ipsa numquam totam! Facilis
              labore sint quis inventore consectetur reprehenderit nesciunt
              error, autem, facere minus dolore laboriosam? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Explicabo autem, reiciendis
              sed, fugit error tempora distinctio omnis sequi velit, eveniet
              animi numquam et fuga? Dignissimos molestias numquam consequatur
              provident dicta. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Impedit repudiandae obcaecati illum laboriosam
              ipsa numquam totam! Facilis labore sint quis inventore consectetur
              reprehenderit nesciunt error, autem, facere minus dolore
              laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Explicabo autem, reiciendis sed, fugit error tempora
              distinctio omnis sequi velit, eveniet animi numquam et fuga?
              Dignissimos molestias numquam consequatur provident dicta.
            </p>
            <div class="comment-box">
              <h3>Leave a Comment</h3>
              <form class="comment-form">
                <input type="text" placeholder="Enter Name" />
                <input type="email" placeholder="Enter Email" />
                <textarea rows="5" placeholder="Your Comment"></textarea>
                <Button route="/" classes="red-btn">
                  POST COMMENT
                </Button>
              </form>
            </div>
          </div>
          <div class="blog-right">
            <h3>Post Categories</h3>
            <div>
              <span>Business Analytics</span>
              <span>22</span>
            </div>
            <div>
              <span>Data Science</span>
              <span>28</span>
            </div>
            <div>
              <span>Machine Learning</span>
              <span>15</span>
            </div>
            <div>
              <span>Computer Science</span>
              <span>34</span>
            </div>
            <div>
              <span>AutoCAD</span>
              <span>42</span>
            </div>
            <div>
              <span>Journdism</span>
              <span>22</span>
            </div>
            <div>
              <span>Commerce</span>
              <span>30</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
