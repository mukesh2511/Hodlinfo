import React from "react";
import "./InfoBar.css";
const Infobar = () => {
  return (
    <div className="bar">
      <p>Best Price to Trade</p>
      <div className="container">
        <div className="info">
          <p className="percent">0.42%</p>
          <span>5 Mins</span>
        </div>
        <div className="info">
          <p className="percent">0.87%</p>
          <span>1 Hour</span>
        </div>
        <div className="best">
          <p>&#x20b9; 24,13,907</p>
          <span>Average BTC/INR net price including commission</span>
        </div>
        <div className="info">
          <p className="percent">9.92%</p>
          <span>1 Day</span>
        </div>
        <div className="info">
          <p className="percent">15.37%</p>
          <span>7 Days</span>
        </div>
      </div>
    </div>
  );
};

export default Infobar;
