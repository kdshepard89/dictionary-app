import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center App-footer">
          Coded by Katie Shepard and open sourced on{" "}
          <a href="https://github.com/kdshepard89/dictionary-app">GitHub</a>
        </footer>
      </div>
    </div>
  );
}
