import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBuilding,
  faAddressCard,
  faQuestionCircle,
  faAddressBook
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import PropertiesScreen from "./screens/PropertiesScreen";
import PropertyDetailsScreen from "./screens/PropertyDetailsScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import FAQScreen from "./screens/FAQScreen";
import ContactScreen from "./screens/ContactScreen";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const toggleMenu = () => {
    document.querySelector(".sidebar").classList.toggle("open");
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = (e) => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <header className={scrolled ? "header header__scrolled" : "header"}>
          <Helmet>
            <title>Richhomes</title>
          </Helmet>
          <div className="brand">
            <Link to="/">RichHomes</Link>
          </div>
          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
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
              <Link to="/contact" onClick={toggleMenu}>
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
      </div>
    </Router>
  );
}

export default App;
