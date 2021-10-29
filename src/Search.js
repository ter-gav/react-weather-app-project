import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import "./Search.css";

export default function Search() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
temperature: response.data.main.temp,
city: response.data.name,
wind: response.data.wind.speed,
humidity: response.data.main.humidity,
description: response.data.weather[0].description,
date: new Date(response.data.dt * 1000),
icon: response.data.weather[0].icon,
coordinates: response.data.coord,
    }
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Search">
        <form>
          <div className="row ps-5 pt-5">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
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
        <Weather temp={weatherData} />
      </div>
    );
  } else {
    const apiKey = "f408b458699300138b2f973b8c6a1c4a";
    let city = "Berlin";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
