import React from "react";
import "./Pricing.css";

export const Pricing = () => {
  return (
    <div id="pricing-container">
      <h2 id="top-title">Pricing</h2>
      <h1 id="bottom-title">
        Pricing of<br></br> Our Agency
      </h1>
      <div id="info">
        <div id="left-box">
          <h3>Starter Pack</h3>
          <ul class="ul">
            <li>Trip</li>
            <li>Hotel</li>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
          </ul>
          <h1 class="cost">2100$</h1>
        </div>
        <div id="right-box">
          <h3>Luxury Pack</h3>
          <ul class="ul">
            <li>Starter Pack</li>
            <li>Flights</li>
            <li>Cruise Trip</li>
            <li>Cruise Trip</li>
          </ul>
          <h1 class="cost">4200$</h1>
        </div>
      </div>
    </div>
  );
};
