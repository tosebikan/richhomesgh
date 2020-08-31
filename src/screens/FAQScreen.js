import React from "react";

import "./FAQScreen.css";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

function FAQScreen() {
  return (
    <div className="faq-container">
      <div className="faq-hero">
        <h1 className="faq-hero-title">Frequently Asked Questions</h1>
        <a href="mailto:customercare@richhomesgh.com">
          <button className="faq-button feature-button">Ask a question</button>
        </a>
      </div>
      <div className="faq-section">
        <h2>FAQ</h2>
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default FAQScreen;
