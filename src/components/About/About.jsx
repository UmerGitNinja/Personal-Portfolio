import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazy-load";
import Umer from "../../Assets/Umer.webp";
import "./About.css";

const About = ({ swiperslide, about, swiper }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (swiperslide === 1) {
      setAnimationClass("animate__slideInUp animate__fast");
    } else if (swiperslide === 0) {
      setAnimationClass("animate__fadeOutDownBig animate__slow");
    }
  }, [swiperslide, animationClass]);

  return (
    <div
      className={`About section animate__animated ${animationClass}`}
      id="About"
      ref={about}
    >
      <div className="About__content-area">
        <div className="About__content-area__text-area">
          <h1>About me</h1>
          <p>
            Hello, I'm Muhammad Umer, a passionate
            <span>Front-End Developer</span>dedicated to creating exceptional
            web experiences.
          </p>{" "}
          <p>
            With a keen eye for design and a strong technical skill set, I turn
            ideas into<span>Beautifully crafted</span>and
            <span>User-friendly</span>websites.
          </p>
          <p>
            I believe that effective web design is a combination of aesthetics,
            functionality, and performance. Whether it's building responsive
            websites, optimizing user interfaces, or enhancing user experiences,
            I'm committed to delivering
            <span>
              <br />
              Top-notch
            </span>
            results.
          </p>
          <p>
            {" "}
            My goal is to make the web a better place, one pixel at a time.
          </p>
          <a
            href="#Contact"
            className="About-btn btn-special"
            onClick={() => {
              swiper.slideTo(4);
            }}
          >
            Contact
          </a>
        </div>

        <div className="About__content-area__img-area">
          <div className="About__content-area__img-area__img-tab">
            <LazyLoad offset={100}>
              <img src={Umer} alt="Umer" loading="lazy" />
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
