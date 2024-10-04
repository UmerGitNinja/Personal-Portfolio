import React from "react";
import "./Skills.css";
import { useState, useEffect, useRef } from "react";

function Skills({ swiperslideindex, skills }) {
  const [iconsanimation, setIconsanimation] = useState("animate__animated");
  const icons = useRef(null);

  useEffect(() => {
    const Icons = icons.current.querySelectorAll("ul li");
    Icons.forEach((icon, index) => {
      icon.style.animationDelay = `${index * 0.15}s`;
      icon.classList.add("animate__fast");
      if (swiperslideindex >= 2) {
        setIconsanimation("animate__fadeInUp");
        icon.classList.add(iconsanimation);
      } else {
        icon.classList.remove(iconsanimation);
      }
    });
  }, [swiperslideindex, iconsanimation]);
  return (
    <div
      className={`Skills section animate__animated ${
        swiperslideindex >= 2
          ? "animate__slideInUp"
          : swiperslideindex
          ? "animate__slideOutDown"
          : ""
      }`}
      id="Skills"
      ref={skills}
    >
      <div className="Skills-content">
        <div className="Skills__text-area">
          <h1>Skills & Experience</h1>
          <p>
            With a strong foundation as a full-stack and front-end developer, I
            am dedicated to crafting exceptional web experiences. Proficient in
            Next.js, React.js, TypeScript &amp; Laravel.
            <br />I have successfully built dynamic websites and engaging
            frontend applications. My expertise encompasses both backend and
            frontend development, ensuring that each project is not only
            functional but also visually appealing and user-focused.
          </p>
          <span>
            Visit my{" "}
            <a
              href="https://www.linkedin.com/in/umer-khan-full-stack-dev/"
              target="_blank"
            >
              Linkedin
            </a>{" "}
            for more details.
          </span>
        </div>
        <div className="Skills__Icons" ref={icons}>
          <ul>
            <li>
              <span>Javascript</span>
              <i className="fa-brands fa-js"></i>
            </li>
            <li>
              <span>React</span>
              <i className="fa-brands fa-react"></i>
            </li>
            <li>
              <span>CSS3</span>
              <i className="fa-brands fa-css3-alt"></i>
            </li>
            <li>
              <span>Bootstrap</span>
              <i className="fa-brands fa-bootstrap"></i>
            </li>
            <li>
              <span>HTML5</span>
              <i className="fa-brands fa-html5"></i>
            </li>
            <li>
              <span>PHP</span>
              <i className="fa-brands fa-php"></i>
            </li>
            <li>
              <span>Figma</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="figma"
              >
                <path
                  fill="#0ACF83"
                  d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"
                ></path>
                <path
                  fill="#A259FF"
                  d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"
                ></path>
                <path
                  fill="#F24E1E"
                  d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"
                ></path>
                <path
                  fill="#FF7262"
                  d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"
                ></path>
                <path
                  fill="#1ABCFE"
                  d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"
                ></path>
              </svg>
            </li>
            <li>
              <span>Git</span>
              <i className="fa-brands fa-git-alt"></i>
            </li>
            <li>
              <span>SASS</span>
              <i className="fa-brands fa-sass"></i>
            </li>
            <li>
              <span>SQL</span>
              <i className="fa-solid fa-database"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
