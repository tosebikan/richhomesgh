import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./PropertiesScreen.css";
import Footer from "../components/Footer";
// import Tab from "../components/Tab";
import data from "../data.js";

function PropertiesScreen() {
  const [active, setActive] = useState("house");

  const houses = data.properties.filter((x) => x.type == "house");
  const lands = data.properties.filter((x) => x.type == "land");

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

          <h1>Properties</h1>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}

export default PropertiesScreen;
