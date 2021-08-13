import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <h1>Dictionary</h1>
        <Dictionary />
      </div>
      <footer>
        <a href="https://github.com/gmgercke/dictionary-app">
          Open-source code
        </a>{" "}
        by Gesa-Maria Gercke
      </footer>
    </div>
  );
}
