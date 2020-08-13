import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faBed,
  faBath,
  faRulerVertical
} from "@fortawesome/free-solid-svg-icons";

import "./Card.css";

function Card({ image, tag, title, price, address, beds, baths, size }) {
  return (
    <div className="card-container">
      <img src={image} alt="" className="card-image" />

      <div className="card-tag">
        <p>{tag}</p>
      </div>
      <div className="card-info">
        <div className="card-info-top">
          <div className="card-info-mid">
            <FontAwesomeIcon icon={faLocationArrow} />
            <p>{address}</p>
          </div>
          <p className="card-info-amount">{price}</p>
        </div>
        <div className="card-info-title">
          <p>{title}</p>
        </div>
        <div className="card-info-bottom">
          <div className="card-info-bottom-part">
            <FontAwesomeIcon icon={faBed} />
            <p>{beds} Beds</p>
          </div>
          <div className="card-info-bottom-part">
            <FontAwesomeIcon icon={faBath} />
            <p>{baths} Baths</p>
          </div>
          <div className="card-info-bottom-part">
            <FontAwesomeIcon icon={faRulerVertical} />
            <p>{size} sqft</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
