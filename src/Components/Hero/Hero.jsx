import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow-right.svg";
import hero_image from "../Assets/hero_img1.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow-icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} />
      </div>
    </div>
  );
}

export default Hero;
