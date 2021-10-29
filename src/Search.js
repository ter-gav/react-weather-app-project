import React from "react";
import axios from "axios";
import Weather from "./Weather";
import "./Search.css";

export default function Search() {
  function handleResponse(response) {
    alert(`Hey its ${response.data.main.temp}`);
  }
  const apiKey = "f408b458699300138b2f973b8c6a1c4a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
      <Weather />
    </div>
  );
}
