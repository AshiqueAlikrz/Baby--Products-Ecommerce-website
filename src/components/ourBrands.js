import React from "react";
import "../styles/ourBrand.css";
import { SiZara } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { SiPuma, SiNike } from "react-icons/si";

const OurBrands = () => {
  return (
    <div>
      <h1>Top Brands</h1>
      <div className="brand-container">
        <SiZara className="brand-icon" />
        <SiAdidas className="brand-icon" />
        <SiPuma className="brand-icon" />
        <SiNike className="brand-icon" />
      </div>
    </div>
  );
};

export default OurBrands;
