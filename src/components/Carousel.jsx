import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../styles/components/Carousel.css";
import localCarousel from "../data/carouselData.json";
import { supabase } from "../data/supabaseClient";

// ...existing code...
function Carousel({ data: dataProp = null }) {
  const [slides, setSlides] = useState(
    dataProp ?? localCarousel.slides ?? []
  );
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (dataProp) {
      setSlides(dataProp);
      setSlide(0);
    }
  }, [dataProp]);

  useEffect(() => {
    if (dataProp) return;

    let mounted = true;
    const load = async () => {
      try {
        const { data: slidesData, error } = await supabase
          .from("destaque")
          .select("src, alt");
        if (!error && slidesData && slidesData.length) {
          if (mounted) setSlides(slidesData);
        } else {
          if (mounted) setSlides(localCarousel.slides ?? []);
        }
      } catch (err) {
        console.error("Erro ao carregar slides:", err);
        if (mounted) setSlides(localCarousel.slides ?? []);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, [dataProp]);

  useEffect(() => {
    if (slides.length === 0) {
      setSlide(0);
    } else if (slide >= slides.length) {
      setSlide(0);
    }
  }, [slides, slide]);

  function nexSlide() {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  }

  function prevSlide() {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  }

  if (!slides || slides.length === 0) return null;

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {slides.map((item, idx) => {
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
          />
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nexSlide}
      />
      <span className="indicators">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
            />
          );
        })}
      </span>
    </div>
  );
}

export default Carousel;