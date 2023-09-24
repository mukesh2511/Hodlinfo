import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Infobar from "../../components/infobar/Infobar";
import "./Home.css";
import TradeInfo from "../../components/tradeInfo/TradeInfo";
import Footer from "../../components/footer/Footer";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const request = async () => {
      const res = await axios.get(
        "https://hodlinfo-ypa3.onrender.com/api/trade"
      );
      setData(res.data);
    };
    request();
  }, []);

  return (
    <div className="home">
      <Navbar />
      <Infobar />
      <div className="table">
        <div className="container">
          <p>#</p>
          <p>Platform</p>
          <p>Last Traded Price</p>
          <p>Buy / Sell Price</p>
          <p>Volume</p>
          <p>Base_Unit</p>
        </div>
      </div>

      {data && data.map((d) => <TradeInfo d={d} key={d._id} />)}

      <hr color="gray" size="1" />
      <Footer />
      <div className="button">
        <button className="add">Add hodlinfo to Home Screen</button>
      </div>
    </div>
  );
};

export default Home;
