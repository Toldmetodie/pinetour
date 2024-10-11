import React from "react";
import "./Destination.css";

export const Destination = () => {
  return (
    <div id="destination-section">
      <div id="left-side">
        <h2>Tours | 6 DAYS</h2>
        <h1 id="bigger">
          Destination of<br></br> Our Agency
        </h1>
        <div class="circle">D1</div>
        <div class="circle">D2</div>
        <div class="circle">D3</div>
        <div id="line"></div>
        <div class="circle">D4</div>
        <div class="circle">D5</div>
        <div class="circle">D6</div>
      </div>
      <div id="right-side">
        <img src="Mask-group.jpg" alt="img" id="map" />
      </div>
    </div>
  );
};
