import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch defaultCity="Berlin" />
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://flamboyant-blackwell-9acb6f.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Teresa Gavric
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/ter-gav/react-weather-app-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://pensive-hypatia-d78523.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
