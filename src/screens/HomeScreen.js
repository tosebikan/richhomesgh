import React from "react";
import "./HomeScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function HomeScreen() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          <span id="c1">Luxury</span>
          <span id="c2">At Its Best</span>
        </h1>
        <p>Premium Real Estate At Your Finger Tips</p>
      </div>
      <div className="hero-icon-container">
        <FontAwesomeIcon icon={faChevronDown} size="3x" className="hero-icon" />
      </div>
    </div>
  );
}

export default HomeScreen;
