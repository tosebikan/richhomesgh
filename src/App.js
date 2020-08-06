import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";

function App() {
  const toggleMenu = () => {
    document.querySelector(".sidebar").classList.toggle("open");
  };
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="brand">
            <Link to="/">RichHomes</Link>
          </div>
          <div className="header-links">
            <Link>Home</Link>
            <Link>Properties</Link>
            <Link>About Us</Link>
            <Link>FAQ</Link>
            <Link>Contact</Link>
            <button
              id="head-btn"
              className="header-button"
              onClick={toggleMenu}
            >
              &#9776;
            </button>
          </div>
        </header>
        <hr id="header-hr" />

        <aside className="sidebar">
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Properties</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </aside>

        <main>
          <div>
            <Route path="/" component={HomeScreen} exact={true} />
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
