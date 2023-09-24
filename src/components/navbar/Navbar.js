import React from "react";
import "./Navbar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TelegramIcon from "@mui/icons-material/Telegram";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <h1>HODLINFO</h1>
          </div>
          <div className="buttons">
            <button className="btn">
              INR <ArrowDropDownIcon style={{ background: "#2e3241" }} />{" "}
            </button>
            <button className="btn">
              BTC <ArrowDropDownIcon style={{ background: "#2e3241" }} />
            </button>
            <button className="btn">BUY BTC</button>
          </div>
          <div className="last">
            <p>40</p>
            <button className="tele">
              <TelegramIcon style={{ background: "#3dc6c1" }} /> Connect
              Telegram
            </button>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
