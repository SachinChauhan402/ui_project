import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import Content from "./Content";
import Features from "./Features";
import Insight from "./Insight";
import Navbar from "./Navbar";
import NewsLetter from "./Newsletter";
import Sponsors from "./Sponsors";
import Steps from "./Steps";

const HomePageContainer = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <Sponsors />
      <Features />
      <Steps />
      <Insight />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default HomePageContainer;
