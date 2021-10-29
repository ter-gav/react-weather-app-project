import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";

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
        <div className="clearfix">
          <div className="row mb-3">
            <div className="col-8">
              <WeatherTemperature celsius={props.data.temperature} />
              <img
                className="icon"
                src={props.data.icon}
                alt="weather conditions"
              ></img>
            </div>

            <div className="col-4">
              <ul>
                <li>Humidity: {props.data.humidity} %</li>
                <li>Wind: {Math.round(props.data.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
