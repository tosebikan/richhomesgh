import React from "react";
import "./FAQScreen.css";
import Footer from "../components/Footer";

function FAQScreen() {
  return (
    <div className="faq-container">
      <div className="faq-hero">
        <h1 className="faq-hero-title">Frequently Asked Questions</h1>
        <button className="faq-button feature-button">Ask a question</button>
      </div>
      <Footer />
    </div>
  );
}

export default FAQScreen;
