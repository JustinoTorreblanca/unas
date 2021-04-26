import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./ImageSlider.scss";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
    <div className="card-conocelas">
     {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              (
              (
              <img src={slide.image} alt="img" className="img-conocelas"   />
            )
            )
            )}
            {index === current && (
              <h1 className="nombre-conocelas">{slide.name}</h1>
            )}
            {index === current && (
              <p className="txt-conocelas">{slide.frase}</p>
            )}
          </div>
        );
      })}

    </div>
    <IoIosArrowBack className="img-flecha-izq" onClick={prevSlide} />
    <IoIosArrowForward className="img-flecha-der" onClick={nextSlide} />
    </>
  );
};

export default ImageSlider;
