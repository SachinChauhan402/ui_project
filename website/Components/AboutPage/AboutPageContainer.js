import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../HomePage/Navbar";
import Promotion from "./Promotion";
import Footer from "../common/Footer";
import NewsLetter from "../HomePage/Newsletter";
import "react-multi-carousel/lib/styles.css";

const AboutPageContainer = () => {
  return (
    <div>
      <Head>
        <title>About Us | 10XTD</title>
      </Head>
      <Navbar page="about" />
      <Promotion />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default AboutPageContainer;
