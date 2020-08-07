import React from "react";
import "./HomeScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Card from "../components/Card";

function HomeScreen() {
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>
            <span id="c1">Luxury</span>
            <span id="c2">At Its Best</span>
          </h1>
          <p>Premium Real Estate At Your Finger Tips</p>
        </div>
        <div className="hero-icon-container">
          <a href="#featured">
            <FontAwesomeIcon
              icon={faChevronDown}
              size="3x"
              className="hero-icon"
            />
          </a>
        </div>
      </div>
      <div id="featured">
        <h2 className="featured-title">Featured Properties</h2>
        <div className="featured-gallery">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <button className="feature-button">See More</button>
      </div>
      <div className="info">
        <div className="info-a">
          <h1>
            Rich Homes <br />
            Properties
          </h1>
          <p>18 junction, Spintex Accra</p>
          <p>+233 054-123-1234</p>
          <p>Mon - Sun: 8:00am - 6:00pm</p>
        </div>
        <div className="info-b">
          <h1>
            Want to Sell Or Rent <br /> a Property ?
          </h1>
          <p>
            Let us create a tailored strategic marketing plan and keep track of
            the selling or renting process.
          </p>
          <button className="info-button">Contact Us</button>
        </div>
      </div>

      <div className="about-us">
        <img
          src={require("../images/pc.jpg")}
          alt=""
          className="about-us-img"
        />

        <div className="about-us-info">
          <h4> About Us</h4>
          <h3>We Provide Premium Properties With ease </h3>
          <p>
            At Rich Homes Properties & investments we take pride in providing
            our clients with top of the line services.
          </p>
          <p>Bringing security to the process of home ownership of renting.</p>

          <button className="feature-button">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
