import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  console.log(current);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <IoIosArrowBack className="img-flecha-izq" onClick={prevSlide} />
      <IoIosArrowForward className="img-flecha-der" onClick={nextSlide} />

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && <img src={slide.image} alt="img" />}
          </div>
        );
      })}
    </>
  );
};

export default ImageSlider;
