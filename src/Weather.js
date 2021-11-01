import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h1 className="mt-5 ps-3">{props.data.city}</h1>
      <div className="row ps-3">
        <div className="col">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="clearfix">
          <div className="row">
            <div className="col">
              <img src={props.data.icon} alt="weather" />
            </div>
            <div className="col">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>

            <div className="col">
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
