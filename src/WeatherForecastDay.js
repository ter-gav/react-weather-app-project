import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  let icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <img src={icon} alt="weather icon" />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperautre-min">
          {" "}
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
