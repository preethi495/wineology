import React from "react";
import banner from "../images/banner.jpg";

const Banner = () => {
  return (
    <div className="position-relative">
      <img className="mw-100" src={banner} alt="banner image" />
      <div className="banner-text">
        <h3>Up your wine game</h3>
        <p>The ultimate cheat sheet for Wine pairings</p>
      </div>
    </div>
  );
};

export default Banner;
