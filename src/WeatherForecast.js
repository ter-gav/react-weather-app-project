import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-3">
          <div className="WeatherForecast-day">Tue</div>
          <img src={props.data.icon} alt="weather icon" />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max"> 20º</span>
            <span className="WeatherForecast-temperautre-min"> 10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
