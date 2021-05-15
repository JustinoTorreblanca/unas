import React, { useState } from "react";
import "./Calendar.scss";
import { MesesData } from "./Meses.Data";
import moment from "moment";

const MesesSlider = ({ months }) => {
  const [current, setCurrent] = useState(0);
  const length = months.length;

  const nextMonth = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevMonth = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(months) || months.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="months-cont">
        {MesesData.map((months, index) => {
          return (
            <p key={index}>
              {index === current && (
                <h1 className="mes-titulo">
                  {months.name} {moment().format("YYYY")}
                </h1>
              )}
            </p>
          );
        })}
      </div>

      <button className="flecha-izquierda" onClick={prevMonth} />
      <button className="flecha-derecha" onClick={nextMonth} />
    </>
  );
};

export default MesesSlider;
