import React from "react";
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
              <button className="feature-button white">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <h2>Contact info</h2>
        <p>You can react us via the following mediums</p>
      </div>
      <Footer />
    </div>
  );
}

export default ContactScreen;
