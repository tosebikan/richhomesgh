import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faSearch,
  faHandshake,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import data from "../data";

import Card from "../components/Card";
import Footer from "../components/Footer";

function HomeScreen() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true,
    className: "slide"
  };

  const featured = data.properties.filter(
    (property) => property.featured === true
  );

  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>
            <span id="c1">Luxury &</span>
            <span id="c2">Affordability</span>
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
          {featured.map((feature) => (
            <Card
              key={feature.id}
              tag={feature.tag}
              image={feature.image}
              title={feature.title}
              price={feature.price}
              address={feature.address}
              beds={feature.bedrooms}
              baths={feature.baths}
              size={feature.size}
              link={`property/${feature.id}`}
            />
          ))}
        </div>
        <Link to="/properties" className="feature-button-container">
          <button className="feature-button">See More</button>
        </Link>
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
          <Link to="/contact">
            <button className="info-button">Contact Us</button>
          </Link>
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

          <Link to="/about-us">
            <button className="feature-button">Learn More</button>
          </Link>
        </div>
      </div>

      <div className="services">
        <div className="services-title">
          <h2>Services</h2>
        </div>
        <div className="services-items-container">
          <div className="services-item">
            <FontAwesomeIcon icon={faSearch} className="services-icon" />
            <h3>Find A Property</h3>
            <p>
              Go through our listings, choose your desired property & contact us
            </p>
          </div>
          <div className="services-item">
            <FontAwesomeIcon icon={faHandshake} className="services-icon" />
            <h3>Agreement</h3>
            <p>
              We facilitate the property purchase or rent process agreement.
            </p>
          </div>
          <div className="services-item">
            <FontAwesomeIcon icon={faHome} className="services-icon" />
            <h3>Enjoy Your New Home</h3>
            <p>
              Move into your new home knowing rich homes has got you covered.
            </p>
          </div>
        </div>
      </div>

      <div className="slide-container">
        <h4>What Our Clients Say</h4>
        <Slider {...settings}>
          <div className="testimonial-item">
            <img src={require("../images/person1.png")} alt="testomonial" />
            <h3>Desmond James</h3>
            <p>
              Rich Homes has the best real estate cutomer service i have ever
              experienced in west Africa.
            </p>
          </div>
          <div className="testimonial-item">
            <img src={require("../images/person2.png")} alt="testomonial" />
            <h3>Mary Queen</h3>
            <p>
              Rich Homes is definitely a service you can trust to get quality
              housing in Ghana.
            </p>
          </div>
        </Slider>
      </div>

      <div className="question">
        <h2> Have question's ?</h2>
        <p>send us your mail and we’ll get in touch with you </p>
        <form
          className="question-form"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="question-input"
            required
          />
          <button className="question-button" type="submit">
            Send
          </button>
        </form>
        <Link to="/contact">
          <button className="feature-button">Send a quick message</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default HomeScreen;
