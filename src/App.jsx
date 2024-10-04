// App.js
import { useState, useRef, useCallback, useEffect, Profiler } from "react";

import { Navbar, About, Projects, Contact, Home, Skills } from "./components";
import { Cursor, Preloader } from "./containers";
import "./App.css";
//import "./Styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Keyboard, Navigation } from "swiper/modules";

function App() {
  const [scrollDirection, setScrollDirection] = useState("Scroll Down");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorHidden, setIsCursorHidden] = useState(false);
  const hidenavbar = useRef(null);
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const [mobileview, setmobileview] = useState(true);
  const [swiper, setSwiper] = useState(null);
  const [swiperslide, setswiperslide] = useState(null);
  const customPagination = useRef(null);
  const [previndex, setprevindex] = useState(null);
  const [preloaderHidden, setPreloaderHidden] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  
  
  
  
  
  const handlenavbarchange = () => {
    hidenavbar.current("hidden");
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (isCursorHidden) {
        setIsCursorHidden(false);
      }
      const posX = e.clientX;
      const posY = e.clientY;
      setCursorPosition({ x: posX, y: posY });
    },
    [isCursorHidden]
  );

  const handleMouseLeave = () => {
    setIsCursorHidden(true);
  };

  const handleSlideChange = useCallback(() => {
    if (swiper) {
      const activeIndex = swiper.realIndex;
      const buttons = customPagination.current.querySelectorAll(
        ".navbar__navbar-links ul li"
      );
      buttons.forEach((button, index) => {
        if (index === activeIndex) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    }
  }, [swiper]);
  handleSlideChange();
  useEffect(() => {
    const handleWindowResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      if (windowWidth >= 900) {
        setmobileview(true);
      } else {
        setmobileview(false);
      }
      if (windowHeight <= 500) {
        setmobileview(false);
      }
    };

    // Call the function initially to set the initial state
    handleWindowResize();

    // Add an event listener for window resize
    window.addEventListener("resize", handleWindowResize);
    console.log(mobileview);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [mobileview]);
  useEffect(() => {
    setTimeout(() => {
      setPreloaderHidden(true);
    }, 3000);
  }, [preloaderHidden]);
  return (
    <>
      <Profiler id="profiler">
        <Preloader hidden={preloaderHidden} />
        <main
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`Main${preloaderHidden ? "-visible" : ""}`}
        >
          <Cursor
            mouse={cursorPosition}
            hidden={isCursorHidden ? "hidden" : null}
          />
          <Navbar
            onPageChange={swiper}
            Custom={customPagination}
            hidden={hidenavbar}
          />
          {mobileview ? (
            <Swiper
              onSwiper={(swiper) => setSwiper(swiper)}
              onSlideChangeTransitionStart={() => {
                const homeElement = home.current;
                const About = about.current;
                const Skills = skills.current;
                const Projects = projects.current;
                if (activeSlideIndex === 1) {
                  homeElement.classList.add("animate__slideInDown");
                } else {
                  homeElement.classList.remove("animate__slideInDown");
                }
                if (activeSlideIndex === 2) {
                  About.classList.add("animate__slideInDown");
                  About.classList.remove("animate__slideInUp");
                  About.classList.remove("animate__slideOutUp");
                } else {
                  About.classList.remove("animate__slideInDown");
                  About.classList.add("animate__slideOutUp");
                }
                if (activeSlideIndex === 3) {
                  Skills.classList.add("animate__slideInDown");
                  Skills.classList.remove("animate__slideOutUp");
                } else {
                  Skills.classList.remove("animate__slideInDown");
                  Skills.classList.remove("animate__slideInUp");
                  Skills.classList.add("animate__slideOutUp");
                }
                if (activeSlideIndex === 4) {
                  Projects.classList.add("animate__slideInDown");
                  Projects.classList.remove("animate__slideOutUp");
                } else {
                  Projects.classList.remove("animate__slideInUp");
                  if (activeSlideIndex != 4 && activeSlideIndex === 3) {
                    Projects.classList.add("animate__slideOutUp");
                  }
                  Projects.classList.remove("animate__slideInDown");
                }
              }}
              onSlideChange={(e) => {
                setActiveSlideIndex(e.realIndex);
                setprevindex(e.realIndex);
                setswiperslide(e.activeIndex);
                if (e.realIndex === 0) {
                  setScrollDirection("Scroll Down");
                }
                if (e.realIndex === 4) {
                  setScrollDirection("Back To Top");
                } else {
                  setScrollDirection("Scroll Down");
                }

                // Assuming this code runs when `activeIndex` changes
                const navbar = document.querySelector(".navbar");

                if (e.realIndex > previndex) {
                  navbar.classList.add("fixed");
                } else if (e.realIndex < previndex) {
                  navbar.classList.remove("fixed");
                }
              }}
              preventClicks={true}
              preventInteractionOnTransition={true}
              allowTouchMove={false}
              rewind={true}
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              speed={1000}
              keyboard={{
                enabled: true,
              }}
              mousewheel={true}
              modules={[Pagination, Mousewheel, Keyboard, Navigation]}
              navigation={false}
              className="main-swiper mySwiper"
            >
              <SwiperSlide className="main-swiper-slide">
                <Home
                  onClick={handlenavbarchange}
                  home={home}
                  swiper={swiper}
                />
              </SwiperSlide>
              <SwiperSlide className="main-swiper-slide">
                <About
                  swiperslide={swiperslide}
                  about={about}
                  swiper={swiper}
                />
              </SwiperSlide>
              <SwiperSlide className="main-swiper-slide">
                <Skills
                  swiperslideindex={swiperslide}
                  prevIndex={previndex}
                  skills={skills}
                />
              </SwiperSlide>
              <SwiperSlide
                className="main-swiper-slide"
                id="Projects__swiper-slide"
              >
                <Projects SwiperSlideIndex={swiperslide} projects={projects} />
              </SwiperSlide>
              <SwiperSlide className="main-swiper-slide">
                <Contact swiperslidIndex={swiperslide} />
              </SwiperSlide>
              <div
                className={`swiper-button-next main-swiper-button ${
                  scrollDirection === "Back To Top" ? "inverse" : ""
                }`}
                onClick={() => {
                  swiper.slideNext();
                }}
              >
                <p>{scrollDirection}</p>
                {scrollDirection === "Scroll Down" ? (
                  <i className="fa-solid fa-arrow-right"></i>
                ) : (
                  <i className="fa-solid fa-arrow-left"></i>
                )}
              </div>
            </Swiper>
          ) : (
            <>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          )}
        </main>
      </Profiler>
    </>
  );
}

export default App;
