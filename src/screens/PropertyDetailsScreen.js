import React from "react";
import "./PropertyDetailsScreen.css";

function PropertyDetailsScreen(props) {
  const property = props.match.params.id;
  console.log(property);
  return (
    <div className="property-container">
      <div className="property-title">
        <h1> Property Details Screen</h1>
      </div>
    </div>
  );
}

export default PropertyDetailsScreen;
