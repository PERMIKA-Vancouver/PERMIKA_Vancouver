import React from "react";
import WhiteLogo from "./assets/logo_white.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={WhiteLogo} className="App-logo" alt="logo" />
        <p>PERMIKA Vancouver</p>
      </header>
    </div>
  );
}

export default App;
