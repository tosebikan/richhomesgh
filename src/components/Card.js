import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faBed,
  faBath,
  faRulerVertical
} from "@fortawesome/free-solid-svg-icons";

import "./Card.css";

function Card() {
  return (
    <div className="card-container">
      <img src={require("../images/home1.jpg")} alt="" class="card-image" />

      <div className="card-tag">
        <p>For Sale</p>
      </div>
      <div className="card-info">
        <div className="card-info-top">
          <p>3 bedroom Apartment</p>
          <p className="card-info-amount">GHC 50,000</p>
        </div>
        <div className="card-info-mid">
          <FontAwesomeIcon icon={faLocationArrow} />
          <p>Spintex</p>
        </div>
        <div className="card-info-bottom">
          <div className="card-info-bottom-part">
            <FontAwesomeIcon icon={faBed} />
            <p>4 Beds</p>
          </div>
          <div className="card-info-bottom-part">
            <FontAwesomeIcon icon={faBath} />
            <p>2 Baths</p>
          </div>
          <div className="card-info-bottom-part">
            <FontAwesomeIcon icon={faRulerVertical} />
            <p>980 sqft</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
