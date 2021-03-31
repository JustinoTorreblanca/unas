import React from "react";
import "./Friends.scss";
import imgfrnd from "../images/cloufriends.png";
import Footer from "./LastCard";
import { Link } from "react-router-dom";

function Friends() {
  return (
    <>
      <img src={imgfrnd} alt="img" className="img-friends" />
      <div className="container-friends">
        <h1 className="titulo-friends">Clou Friends</h1>
        <p className="tres-amigas">
          Un máximo de tres amigas en el mismo domicilio donde todas se hagan
          algún combo. La que nos contrató tiene un 50% de descuento ensu combo
          y las amigas tienen un 25%
        </p>
        <Link to="/agendar-cita" className="link-btn">
          <span className="btn-agendar-amigas">Agendar cita</span>
        </Link>
      </div>
      <Footer />;
    </>
  );
}

export default Friends;
