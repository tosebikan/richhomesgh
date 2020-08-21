import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./PropertiesScreen.css";
import Footer from "../components/Footer";
import Card from "../components/Card";
import data from "../data.js";

function PropertiesScreen() {
  const [active, setActive] = useState("house");

  const houses = data.properties.filter((x) => x.type === "house");
  const apartments = data.properties.filter((x) => x.type === "apartments");
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
          </TabList>

          <h2>Properties</h2>

          <TabPanel>
            <h4>Houses</h4>
            <div className="featured-gallery">
              {houses.map((house) => (
                <Card
                  image={house.image}
                  tag={house.tag}
                  title={house.title}
                  price={house.price}
                  address={house.price}
                  beds={house.beds}
                  baths={house.baths}
                  size={house.size}
                  link={`/property/${house.id}`}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h4>Any content 2</h4>
          </TabPanel>
          <TabPanel>
            <h4>Any content 3</h4>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}

export default PropertiesScreen;
