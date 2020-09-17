import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faPhone,
  faEnvelope,
  faRulerVertical
} from "@fortawesome/free-solid-svg-icons";
import "./PropertyDetailsScreen.css";
import Footer from "../components/Footer";
import MyMap from "../components/MyMap";
import data from "../data";

function PropertyDetailsScreen(props) {
  const property = data.properties.find((x) => x.id === props.match.params.id);
  const position = [property.marker.lat, property.marker.lng];

  if (!props.match.params.id) return null;

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "slides"
  };

  return (
    <div className="property-details-container">
      <div className="property-details-container-group">
        <div className="property-details-info">
          <div className="SliderContainer">
            <Slider {...settings}>
              {property.images.map((image) => (
                <div key={image.url}>
                  <img src={image.url} alt="" className="property-img" />
                </div>
              ))}
            </Slider>
          </div>

          <h4 className="property-details-title"> Property Details</h4>
          <div className="property-details-section">
            <div className="property-details-section-top">
              <p className="property-details-info-title">{property.title}</p>
              <p className="property-details-tag">{property.tag}</p>
            </div>
            <div className="property-details-section-bottom">
              <p className="property-details-address">
                {property.marker.address}
              </p>
              <div className="property-details-price">
                <p className="property-details-price-top">price:</p>
                <p className="property-details-price-bottom">
                  {property.price}
                </p>
              </div>
            </div>
          </div>
          <hr className="property-details-hr" />
          <div className="property-details-tags">
            <div className="property-detials-tags-main">
              <p className="property-details-tag-title">Bedrooms</p>
              <div className="property-details-tags-section">
                <p>{property.bedrooms}</p>
                <FontAwesomeIcon icon={faBed} />
              </div>
            </div>

            <div className="property-detials-tags-main">
              <p className="property-details-tag-title">Baths</p>
              <div className="property-details-tags-section">
                <p>{property.baths}</p>
                <FontAwesomeIcon icon={faBath} />
              </div>
            </div>

            <div className="property-detials-tags-main">
              <p className="property-details-tag-title">size</p>
              <div className="property-details-tags-section">
                <p>{property.size}sq/ft</p>
                <FontAwesomeIcon icon={faRulerVertical} />
              </div>
            </div>
          </div>

          <div className="property-details-description">
            <div>
              <p className="property-details-title">Description</p>
            </div>
            <div>
              <p className="property-details-text">{property.details}</p>
            </div>
          </div>
        </div>
        <div className="property-details-group">
          <div className="property-details-map">
            <MyMap
              center={position}
              position={position}
              text={property.marker.address}
            />
          </div>
          <div className="property-details-contact">
            <div className="property-details-image-container">
              <img
                src={require("../images/avatar.jpg")}
                alt=""
                className="property-details-image"
              />
            </div>

            <p className="property-details-contact-title">Agent</p>
            <h4> Richmond Sottie</h4>
            <div className="property-details-call">
              <button>
                <FontAwesomeIcon icon={faPhone} /> 054 123 1234
              </button>
            </div>

            <div className="property-details-mail">
              <button>
                <FontAwesomeIcon icon={faEnvelope} /> Send Message{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PropertyDetailsScreen;
