import React from "react";
import "./AboutUsScreen.css";

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
          We are passionate about real estate and ensure the bestin quality
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
    </div>
  );
}

export default AboutUsScreen;
