import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../_dist/carosel.css";

function Carosel() {
  return (
    <div className="carosel-container">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <div className="carosel-actions">
          <div className="action-btn">
            <ButtonBack className="action-btn">
              <span className="btn-txt">
                <LeftOutlined />
                Previous
              </span>
            </ButtonBack>
          </div>
          <div className="action-btn">
            <ButtonNext className="action-btn">
              <span className="btn-txt">
                Next <RightOutlined />
              </span>
            </ButtonNext>
          </div>
        </div>

        <Slider>
          <Slide index={0}>
            <div className="slide-item">
              <h1 className="slide-title">
                Let the right people know you’re open to work
              </h1>
              <p className="slide-prag">
                With the Open To Work feature, you can privately tell recruiters
                or publicly share with the LinkedIn community that you are
                looking for new job opportunities.
              </p>
            </div>
            <div className="slide-image-container">
              <img
                src="https://static.licdn.com/aero-v1/sc/h/dbvmk0tsk0o0hd59fi64z3own"
                alt=""
                className="slide-img"
              />
            </div>
          </Slide>
          <Slide index={1}>
            <div className="slide-item">
              <h1 className="slide-title">
                Conversations today could lead to opportunity tomorrow
              </h1>
              <p className="slide-prag">
                Sending messages to people you know is a great way to strengthen
                relationships as you take the next step in your career.
              </p>
            </div>
            <div className="slide-image-container">
              <img
                src="https://static.licdn.com/aero-v1/sc/h/2r8kd5zqpi905lkzsshdlvvn5"
                alt=""
                className="slide-img"
              />
            </div>
          </Slide>
          <Slide index={2}>
            <div className="slide-item">
              <h1 className="slide-title">Stay up to date on your industry</h1>
              <p className="slide-prag">
                From live videos, to stories, to newsletters and more, LinkedIn
                is full of ways to stay up to date on the latest discussions in
                your industry.
              </p>
            </div>
            <div className="slide-image-container">
              <img
                src="https://static.licdn.com/aero-v1/sc/h/ann24vsq7r0ux3vipqa1n90gg"
                alt=""
                className="slide-img"
              />
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
}

export default Carosel;
