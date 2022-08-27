import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import Quotes from "./components/Quotes"


function App() {
  return (
    <div>
      <Navbar />
      <div className="sections">
        <Navbar />
        <Home />
        <Portfolio />
        <Quotes />
      </div>
    </div>
  );
}

export default App;
