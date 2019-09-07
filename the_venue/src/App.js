import React from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venue_info";
import Highlights from "./components/Highlights";
import Pricing from "./components/pricing";
import Location from "./components/locations";
import Footer from "./components/header_footer/Footer";

function App() {
  return (
    <div className="App" style={{ height: "1600px", background: "cornflower" }}>
      <Header />
      
      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venuenfo">
        <VenueInfo />
      </Element>

      <Element name="highlights">
        <Highlights />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
