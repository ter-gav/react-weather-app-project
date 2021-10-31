import axios from "axios";
import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let latitude = props.data.lat;
  let longitude = props.data.lon;
  let apiKey = `f408b458699300138b2f973b8c6a1c4a`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
