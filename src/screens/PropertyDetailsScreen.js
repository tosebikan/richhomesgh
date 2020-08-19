import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faBed,
  faBath,
  faRulerVertical
} from "@fortawesome/free-solid-svg-icons";
import "./PropertyDetailsScreen.css";
import data from "../data";

function PropertyDetailsScreen(props) {
  const property = data.properties.find((x) => x.id === props.match.params.id);
  return (
    <div className="property-details-container">
      <div className="property-details-info">
        <img src={property.image} alt="" className="property-img" />
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
              <p className="property-details-price-bottom">{property.price}</p>
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
    </div>
  );
}

export default PropertyDetailsScreen;