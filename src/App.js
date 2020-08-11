import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBuilding,
  faAddressCard,
  faQuestionCircle,
  faAddressBook,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
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
              <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
              <Link>Home</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} className="sidebar-icon" />
              <Link>Properties</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAddressCard} className="sidebar-icon" />
              <Link>About Us</Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="sidebar-icon"
              />
              <Link>FAQ</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAddressBook} className="sidebar-icon" />
              <Link>Contact</Link>
            </li>
          </ul>
        </aside>

        <main>
          <div>
            <Route path="/" component={HomeScreen} exact={true} />
          </div>
        </main>
        <footer className="footer">
          <div className="footer-top">
            <h4>RichHomes Properties</h4>
            <div className="footer-top-item">
              <p>Services</p>
              <hr />
            </div>
            <div className="footer-top-item">
              <p>Contact Us</p>
              <hr />
              <div className="footer-contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
                <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              <span
                role="img"
                aria-label="copyright"
                className="footer-copyrigt"
              >
                ©️
              </span>
              2020 All Rights Reserved By oltostudios
            </p>{" "}
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
