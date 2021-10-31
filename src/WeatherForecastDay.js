import React from "react";

export default function WeatherForecastDay(props) {
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
      <div className="col-3">
        <div className="WeatherForecast-day">{day()}</div>
        <img src="/" alt="weather icon" />
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
    </div>
  );
}
