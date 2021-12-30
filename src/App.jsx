import { useState } from "react";
import "@navikt/ds-css";
import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  return (
    <main className="main">
      <div className="app">
        <Greeting />
      </div>
    </main>
  );
}

export default App;
