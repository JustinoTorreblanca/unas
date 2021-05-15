import React, { useState, useEffect } from "react";
import "./Calendar.scss";

const Calendar = ({ value, onChange }) => {
  const [calendar, setCalendar] = useState([]);

  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");

  useEffect(() => {
    const day = startDay.clone().subtract(1, "day");
    const a = [];
    while (day.isBefore(endDay, "day")) {
      a.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }
    setCalendar(a);
  }, [value]);

  function isSelected(day, value) {
    return value.isSame(day, "day");
  }

  function beforeToday(day) {
    return day.isBefore(new Date(), "day");
  }

  function isToday(day) {
    return day.isSame(new Date(), "day");
  }

  function dayStyles(day, value) {
    if (beforeToday(day)) return "before";
    if (isSelected(day, value)) return "selected";
    if (isToday(day)) return "today";
    return "";
  }

  function currMonthName() {
    return value.format("MMMM");
  }
  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  function thisMonth() {
    return value.isSame(new Date(), "month");
  }

  return (
    <div className="contenedor-calendario">
      <div className="barra-mes">
        {currMonthName()} {currYear()}
        <div className="container-botones-mes">
          <div
            className="previous"
            onClick={() => !thisMonth() && onChange(prevMonth())}
          >
            {!thisMonth() ? String.fromCharCode(171) : null}
          </div>

          <div className="next" onClick={() => onChange(nextMonth())}>
            {String.fromCharCode(187)}
          </div>
        </div>
      </div>
      {/* DIAS DE LA SEMANA */}
      <div className="dias-semana">
        <p>D</p>
        <p>L</p>
        <p>M</p>
        <p>M</p>
        <p>J</p>
        <p>V</p>
        <p>S</p>
      </div>
      <hr />
      <div className="calendar">
        {calendar.map((week) => (
          <div>
            {week.map((day) => (
              <div
                className="day"
                onClick={() => !beforeToday(day) && onChange(day)}
              >
                <div
                  className={dayStyles(day, value)}
                  name="dia"
                  id={day.format("D").toString()}
                >
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
