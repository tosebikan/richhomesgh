import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhone,
  faEnvelope,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import "./ContactScreen.css";

import Footer from "../components/Footer";
import MyMap from "../components/MyMap";

function ContactScreen() {
  const position = [5.629175, -0.076558];
  return (
    <div className="contact-container">
      <div style={{ paddingTop: 50 }}>
        <h1>Contact</h1>
        <div className="contact-top">
          <div className="map-container">
            <MyMap
              center={position}
              position={position}
              text={"18 junction spintex"}
            />
          </div>
          <div className="contact-form-container">
            <p className="form-title">Leave us a message</p>
            <form className="contact-form">
              <div className="contact-form-top-section">
                <div className="contact-form-item">
                  <label>Name</label>
                  <input name="name" placeholder="name" />
                </div>
                <div className="contact-form-item">
                  <label>Email</label>
                  <input name="name" placeholder="email" />
                </div>
              </div>

              <div className="contact-message-item">
                <label>Message</label>
                <textarea name="message" placeholder="message" />
              </div>
              <button className="feature-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <h2>Contact info</h2>
        <p>You can react us via the following mediums</p>
      </div>
      <div className="contact-info-section">
        <div className="contact-info-group">
          <div className="contact-info-item">
            <FontAwesomeIcon icon={faLocationArrow} className="contact-icon" />
            <p>Address</p>
          </div>
          <p className="contact-info-bottom">18 Junction Spintex, Accra</p>
        </div>
        <div className="contact-info-group">
          <div className="contact-info-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <p>Call Us</p>
          </div>
          <p className="contact-info-bottom">054 1356 456 - 054 1356 456</p>
        </div>
        <div className="contact-info-group">
          <div className="contact-info-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <p>Email us</p>
          </div>
          <p className="contact-info-bottom">customercare@richhomesgh.com</p>
        </div>
        <div className="contact-info-group">
          <div className="contact-info-item">
            <FontAwesomeIcon icon={faHeart} className="contact-icon" />
            <p>social links</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faInstagram}
              className="social-contact-icon"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="social-contact-icon"
            />
            <FontAwesomeIcon icon={faTwitter} className="social-contact-icon" />
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="social-contact-icon"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactScreen;
