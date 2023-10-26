import React from "react";

const SlideFirst = () => {
  return (
    <div className="container">
      <div
        className="incontainer"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div>
          <img
            className="firstslideimage"
            src="/images/businessmen-holding-launching-rocket-icon.jpg"
            alt="Business Holding"
          />
        </div>
        <div className="titlecontainer">
          <p className="firstheading">
            <span style={{ fontWeight: 800 }}>10XTD</span>
            <span style={{ color: "#ed6410", fontWeight: 500 }}> Network</span>
          </p>
          <p className="globalheadingfirst">Global Partner Program for CXOs</p>
          <hr className="hrtaghorizontal" />
          <p className="growthpartner">Growth Partner</p>

          <p className="cmpnysymbol">10XTD</p>
          <hr className="cmpnysymbolhr" />
          <p className="cmpnysymboltext">
            Digital on Demand <br />
            Platform for Growth
            <br />
            Network of CXOs, <br />
            Entrepreneurs, Experts, Talent
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideFirst;
