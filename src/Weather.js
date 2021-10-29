import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h1 className="mt-5 ps-5">{props.data.city}</h1>
      <div className="row ps-5">
        <div className="col-6">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="units"> ºC | ºF</span>
            <img src={props.data.icon} alt="weather conditions"></img>
          </div>
          <div className="col-6 ps-5 pb-5">
            <ul>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
              <li>Sunrise: </li>
              <li>Sunset: </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
