import React,{useState} from "react";
import Head from "next/head";
import Navbar from "../HomePage/Navbar";
import NewsLetter from "../HomePage/Newsletter";
import Footer from "../common/Footer";
import FaqContent from "./FaqContent";
const FaqContainer = () => {
  return (
    <div>
      <Head>
        <title>FAQs | 10XTD</title>
      </Head>
      {/* <div className="sticky w-full top-0 bg-white bg-opacity-80"> */}
      <Navbar/>
      {/* </div> */}
      <FaqContent/>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default FaqContainer;
