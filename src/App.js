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
import PropertiesScreen from "./screens/PropertiesScreen";
import PropertyDetailsScreen from "./screens/PropertyDetailsScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import FAQScreen from "./screens/FAQScreen";
import ContactScreen from "./screens/ContactScreen";

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
            <Link to="/">Home</Link>
            <Link to="/properties">Properties</Link>
            <Link to="about-us">About Us</Link>
            <Link to="faq">FAQ</Link>
            <Link to="contact">Contact</Link>
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
              <Link onClick={toggleMenu} to="/">
                Home
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} className="sidebar-icon" />
              <Link to="/properties" onClick={toggleMenu}>
                Properties
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAddressCard} className="sidebar-icon" />
              <Link to="/about-us" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="sidebar-icon"
              />
              <Link to="/faq" onClick={toggleMenu}>
                FAQ
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAddressBook} className="sidebar-icon" />
              <Link to="contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </aside>

        <main>
          <div>
            <Route path="/" component={HomeScreen} exact={true} />
            <Route path="/properties" component={PropertiesScreen} />
            <Route path="/property/:id" component={PropertyDetailsScreen} />
            <Route path="/about-us" component={AboutUsScreen} />
            <Route path="/faq" component={FAQScreen} />
            <Route path="/contact" component={ContactScreen} />
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
