import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./PropertiesScreen.css";
import Footer from "../components/Footer";
import Card from "../components/Card";
import data from "../data.js";

function PropertiesScreen() {
  const [active, setActive] = useState("house");

  const houses = data.properties.filter((x) => x.type === "house");
  const apartments = data.properties.filter((x) => x.type === "apartment");
  const lands = data.properties.filter((x) => x.type === "land");

  const handleClick = (e) => {
    setActive(e.target.id);
  };
  return (
    <div className="properties-container">
      <div className="categories-container">
        <Tabs>
          <TabList className="tab-title-container">
            <Tab className="tab-title">
              <button
                id="house"
                onClick={handleClick}
                className={active === "house" ? "active" : null}
              >
                Houses
              </button>
            </Tab>
            <Tab className="tab-title">
              <button
                id="apartment"
                onClick={handleClick}
                className={active === "apartment" ? "active" : null}
              >
                Apartments
              </button>
            </Tab>
            <Tab className="tab-title">
              <button
                id="land"
                onClick={handleClick}
                className={active === "land" ? "active" : null}
              >
                Lands
              </button>
            </Tab>
            <div className="property-hero-title">
              <h4>Properties</h4>
            </div>
          </TabList>

          <TabPanel>
            <h4>Houses</h4>
            <div className="featured-gallery">
              {houses.map((house) => (
                <Card
                  image={house.image}
                  tag={house.tag}
                  title={house.title}
                  price={house.price}
                  address={house.address}
                  beds={house.beds}
                  baths={house.baths}
                  size={house.size}
                  link={`/property/${house.id}`}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h4>Apartments</h4>
            <div className="featured-gallery">
              {apartments.map((apartment) => (
                <Card
                  image={apartment.image}
                  tag={apartment.tag}
                  title={apartment.title}
                  price={apartment.price}
                  address={apartment.price}
                  beds={apartment.beds}
                  baths={apartment.baths}
                  size={apartment.size}
                  link={`/property/${apartment.id}`}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h4>Lands</h4>
            <div className="featured-gallery">
              {lands.map((land) => (
                <Card
                  image={land.image}
                  tag={land.tag}
                  title={land.title}
                  price={land.price}
                  address={land.price}
                  beds={land.beds}
                  baths={land.baths}
                  size={land.size}
                  link={`/property/${land.id}`}
                />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}

export default PropertiesScreen;
