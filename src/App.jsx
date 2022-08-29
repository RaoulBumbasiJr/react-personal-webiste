import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Quotes from "./components/Quotes";


function App() {
  return (
    <div className="app">
      <Navbar />
        <div className="sections">
          <Home />
          <Portfolio />
          <Quotes />
      </div>
    </div>
  );
}

export default App;
