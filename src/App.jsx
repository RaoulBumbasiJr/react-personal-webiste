import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Quotes from "./components/quotes/Quotes";


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
 