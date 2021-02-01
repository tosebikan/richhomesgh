import React from "react";
import "./AboutUsScreen.css";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingUsd,
  faHandshake,
  faHome
} from "@fortawesome/free-solid-svg-icons";

function AboutUsScreen() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-hero">
        <img src={require("../images/hero-image.jpg")} alt="" />

        <h1>About Us</h1>
      </div>
      <div className="aboutus-hero-text">
        <p>
          Rich Homes Properties helps tenants & future home homes find the best
          in premium real estate in Ghana without the overhead excessive costs.
        </p>
        <p>
          We are passionate about real estate and ensure the best in quality
          services are rendered in all our processes.
        </p>
      </div>
      <div className="aboutus-images">
        <img
          src={require("../images/women.jpg")}
          alt=""
          className="women-image"
        />

        <img src={require("../images/man.jpg")} alt="" className="man-image" />
      </div>
      <div className="services">
        <div className="services-title">
          <h2>Why work with us</h2>
        </div>
        <div className="services-items-container">
          <div className="services-item">
            <FontAwesomeIcon
              icon={faHandHoldingUsd}
              className="services-icon"
            />
            <h3 style={{ color: "#fff" }}>Competitive Prices</h3>
            <p>
              Properties on our platform are valued based on current market
              prices
            </p>
          </div>
          <div className="services-item">
            <FontAwesomeIcon icon={faHandshake} className="services-icon" />
            <h3 style={{ color: "#fff" }}>Ease of service</h3>
            <p>We ensure the entire process is done fast and effectively.</p>
          </div>
          <div className="services-item">
            <FontAwesomeIcon icon={faHome} className="services-icon" />
            <h3 style={{ color: "#fff" }}>Access to Premium properties</h3>
            <p>
              We provide access to the best properties in ghana at genuine
              prices
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUsScreen;
