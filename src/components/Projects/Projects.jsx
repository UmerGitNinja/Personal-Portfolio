import React from "react";
import {
  Brunchifyone,
  Brunchifytwo,
  Brunchifythree,
  Logitechone,
  Logitechtwo,
  Logitechthree,
  Movieone,
  Movietwo,
  Moviethree,
  Teslaone,
  Teslatwo,
  Teslathree,
  Aiappone,
  Aiapptwo,
  Aiappthree,
} from "..";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./Projects.css";

function Projects({ SwiperSlideIndex, projects }) {
  return (
    <div
      className={`section Projects animate__animated ${SwiperSlideIndex >= 3
        ? "animate__slideInUp"
        : SwiperSlideIndex === undefined
          ? ""
          : "animate__slideOutDown"
        }`}
      ref={projects}
      id="Projects"
    >
      <div className="Projects__content">
        <div className="Projects__text-area-wrapper">
          <div className="Projects__text-area">
            <h1>
              Projects<span>.</span>
            </h1>
          </div>
          <div className="Project__swiper-buttons">
            <button className="Swiper-Prev" aria-label="prvious button" role="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                <path
                  d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                  data-name="Left"
                />
              </svg>
            </button>
            <button className="Swiper-Next" aria-label="Next button" role="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                <path
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="Projects__swiper">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            rewind={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 80,
              },
              1920: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
            }}
            speed={500}
            navigation={{
              nextEl: ".Swiper-Next",
              prevEl: ".Swiper-Prev",
            }}
            modules={[
              Navigation
            ]}
            className="mySwiper"
          >
            <SwiperSlide className="Projects__swiper-slide">
              <div className="img-tab">
                <Carousel pause="hover" touch={false} controls={false} indicators={false}>
                  <Carousel.Item>
                    <img src={Brunchifyone} alt="Brunchify-one"  loading="lazy"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Brunchifytwo} alt="Brunchify-two"  loading="lazy"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Brunchifythree} alt="Brunchify-three"  loading="lazy"/>
                  </Carousel.Item>
                  </Carousel>
              </div>
              <div className="text-tab">
                <span className="small-text">HTML/CSS</span>
                <h3>Brunchify</h3>
                <p>
                Brunchify's landing page is your go-to hub for brunch lovers, showcasing delectable dishes and an easy-to-use email contact form.
                </p>
                <a href="https://brunchify.online/" target="_blank" className="live-preview">
                  Live Preview
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Projects__swiper-slide">
              <div className="img-tab">
                <Carousel pause="hover" touch={false} controls={false} indicators={false}>
                  <Carousel.Item>
                    <img src={Logitechtwo} alt="Logitech-one"  loading="lazy"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Logitechthree} alt="Logitech-two"  loading="lazy"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Logitechone} alt="Logitech-three"  loading="lazy"/>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="text-tab">
                <span className="small-text">PHP</span>
                <h3>Logitech G</h3>
                <p>
                The "Logitech G Clone" project replicates Logitech G's gaming peripherals with RGB lighting, precision sensors, and ergonomic designs at an affordable price.
                </p>
                <a href="https://v2.muhammadumer.dev/" rel="noreferrer" target="_blank" className="live-preview">
                  Live Preview
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Projects__swiper-slide">
              <div className="img-tab">
                <Carousel pause="hover" touch={false} controls={false} indicators={false}>
                  <Carousel.Item>
                    <img src={Movieone} alt="movie-one"  loading="lazy"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Movietwo} alt="movie-two"  loading="lazy"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Moviethree} alt="movie-three"  loading="lazy"/>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="text-tab">
                <span className="small-text">React, Rapid API</span>
                <h3>Movies App</h3>
                <p>
                  
The movie streaming app exclusively offers a wide selection of movies, ensuring a focused and enjoyable cinematic viewing experience.
                </p>
                <a href="https://v4.muhammadumer.dev/" className="live-preview" target="_blank">
                  Live Preview
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Projects__swiper-slide">
              <div className="img-tab">
                <Carousel pause="hover" touch={false} controls={false} indicators={false}>
                  <Carousel.Item>
                    <img src={Teslaone} alt="tesla-one"  loading="lazy"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Teslatwo} alt="tesla-two"  loading="lazy"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Teslathree} alt="tesla-three"  loading="lazy"/>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="text-tab">
                <span className="small-text">HTMl,CSS and Javascript</span>
                <h3>Tesla Clone</h3>
                <p>
                The Tesla clone website highlights electric vehicles and sustainable energy solutions, emphasizing innovation and a cleaner future.
                </p>
                <a href="https://v3.muhammadumer.dev/" target="_blank" className="live-preview">
                  Live Preview
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Projects__swiper-slide">
              <div className="img-tab">
                <Carousel pause="hover" touch={false} controls={false} indicators={false}>
                  <Carousel.Item>
                    <img src={Aiappone} alt="Ai__app-one"  loading="lazy"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Aiappthree} alt="Ai__app-two"  loading="lazy"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Aiapptwo} alt="Ai__app-three"  loading="lazy"/>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="text-tab">
                <span className="small-text">React</span>
                <h3>Ai APP</h3>
                <p>
                The AI app revolutionizes productivity with intelligent automation and seamless integration, powered by cutting-edge artificial intelligence.
                </p>
                <a href="https://v5.muhammadumer.dev/" target="_blank" className="live-preview">
                  Live Preview
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Projects;