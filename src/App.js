import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <Dictionary default="dictionary" />
      </div>
      <footer>
        <a
          href="https://github.com/gmgercke/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Gesa-Maria Gercke
      </footer>
    </div>
  );
}
