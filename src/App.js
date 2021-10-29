import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch defaultCity="Berlin" />
      </div>
    </div>
  );
}
