import React from "react";

/* import Elisa from "../images/Nosotros/Elisa.png";
import FlechaDer from "../images/Nosotros/flechader.png";
import FlechaIzq from "../images/Nosotros/flechaizq.png"; */
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

function Conocelas() {
  return (
    <div className="container-conocelas">
      <h1 className="titulo-conocelas">Conócelas</h1>
      <h2 className="ellas-conocelas">Ellas conforman nuestro equipo:</h2>
      <ImageSlider slides={SliderData} />
      {/*  <div className="card-conocelas">
        <img src={Elisa} alt="img" className="img-conocelas"></img>
        <h1 className="nombre-conocelas">Elisa</h1>
        <p className="txt-conocelas">
          "Agradezco infinitamente a Dios y a la vida por estar en este gran
          equipo y por ser parte de la familia Clou. Y a ti Dani por confiar en
          mi."
        </p>
      </div> */}

      {/* <img src={FlechaIzq} alt="img" className="img-flecha-izq"></img>
      <img
        src={FlechaDer}
        onClick=""
        alt="img"
        className="img-flecha-der"
      ></img> */}
    </div>
  );
}

export default Conocelas;
