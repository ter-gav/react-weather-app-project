import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      coordinates: response.data.coord,
    });
  }
  function search() {
    const apiKey = "f408b458699300138b2f973b8c6a1c4a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherSearch">
        <form onSubmit={handleSubmit}>
          <div className="row ps-3 pt-5">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                onChange={handleCityChange}
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-success w-100"
              ></input>
            </div>
          </div>
        </form>
        <Weather data={weatherData} />
        <hr />
        <WeatherForecast data={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
