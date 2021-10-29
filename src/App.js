import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="Berlin" />
      </div>
    </div>
  );
}
