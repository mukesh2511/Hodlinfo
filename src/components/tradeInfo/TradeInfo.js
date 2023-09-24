import React from "react";
import "./TradeInfo.css";

const TradeInfo = ({ d }) => {
  // const { id, name, last, buy, sell, volume, base_unit } = d;
  return (
    <div className="trade">
      <div className="container">
        <p className="no">{d.id}</p>
        <div className="name">
          <img src="./images/img1.png" alt="" />
          <span>{d.name}</span>
        </div>
        <p className="price">₹ {d.last}</p>
        <p className="buy">
          ₹ {d.buy}/₹ {d.sell}
        </p>
        <p className="diff">₹{d.volume}</p>
        <p className="savings">▼ {d.base_unit}</p>
      </div>
    </div>
  );
};

export default TradeInfo;
