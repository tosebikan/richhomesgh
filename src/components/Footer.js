import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

function Footer() {
  return (
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
          <span role="img" aria-label="copyright" className="footer-copyrigt">
            ©️
          </span>
          2020 All Rights Reserved By oltostudios
        </p>{" "}
      </div>
    </footer>
  );
}

export default Footer;
