import React, { useState } from "react";
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
  const [status, setStatus] = useState("");

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };
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
            <form
              className="contact-form"
              onSubmit={submitForm}
              action="https://formspree.io/myynqvwo"
              method="POST"
            >
              <div className="contact-form-top-section">
                <div className="contact-form-item">
                  <label>Name</label>
                  <input type="text" name="name" placeholder="name" required />
                </div>
                <div className="contact-form-item">
                  <label>Email</label>
                  <input
                    type="email"
                    name="name"
                    placeholder="email"
                    required
                  />
                </div>
              </div>

              <div className="contact-message-item">
                <label>Message</label>
                <textarea name="message" placeholder="message" required />
              </div>

              {status === "SUCCESS" ? (
                <p>Thanks!</p>
              ) : (
                <button className="feature-button">Send Message</button>
              )}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
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
          <div className="contact-info-bottom">
            <a href="tel:+123456890">
              <button className="feature-button">054 1356 456</button>
            </a>
            <a href="tel:+123456890">
              <button className="feature-button">054 1356 456</button>
            </a>
          </div>
        </div>
        <div className="contact-info-group">
          <div className="contact-info-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <p>Email us</p>
          </div>
          <a href="mailto:customercare@richhomesgh.com">
            <p className="contact-info-bottom email">
              customercare@richhomesgh.com
            </p>{" "}
          </a>
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
