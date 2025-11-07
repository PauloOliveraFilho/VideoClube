import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "../styles/components/Carousel.css";

function Carousel({ data }) {
  const [slide, setSlide] = useState(0);

  function nexSlide() {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  }

  function prevSlide() {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  }

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={
              slide === idx
                ? "carousel-item"
                : "carousel-item carousel-item-hidden"
            }
          ></img>
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nexSlide}
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default Carousel;
