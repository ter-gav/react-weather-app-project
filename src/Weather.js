import React from "react"
import Search from "./Search"
import "./Weather.css"

export default function Weather() {
    return <div className="Weather">
      <Search />
        <h1 className="mt-5">Berlin</h1>
        <div className="row">
<div className="col-6">
    <ul>
        <li>
            Saturday 12am
        </li>
        <li>clear sky</li>
    </ul>
</div>
<div className="row">
<div className="col-6">
    <h2>22ºC</h2>
    <img src="https://wwwcache.wral.com/presentation/v3/images/wx/weather-day-clear.svg" alt=""></img>
</div>
<div className="col-6">
    <ul>
        <li>
            Humidity:
        </li>
        <li>Wind: </li>
        <li>Sunrise: </li>
        <li>Sunset: </li>
    </ul>
</div>
</div></div></div>

        
  
}