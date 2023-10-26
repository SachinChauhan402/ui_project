import React from "react";
import { Link, Element } from "react-scroll";

export const PromotionSection = ({ activeTab }) => {
  return (
    <Element className="grid md:grid-cols-2 grid-cols-1 gap-4 text-center px-4 md:w-2/4 w-full mx-auto my-12">
      <div className="md:border-r-2 border-gray-300 md:bg-white bg-blue-150 md:py-0 py-16">
        <div className="w-60 md:h-60 bg-blue-150 mx-auto">
          <img
            src="/images/about-us1.png"
            height="100px"
            width="100px"
            alt="about us"
            className="mx-auto md:py-16"
          />
        </div>
        <p className="w-60 mx-auto text-lg mt-6">
          We work as an on-demand partner for the CXOs and Entrepreneurs
        </p>
      </div>
      <div className='md:bg-white bg-blue-150 md:py-0 py-16'>
        <div className="w-60 md:h-60 bg-blue-150 mx-auto">
          <img
            src="/images/about-us2.png"
            height="100px"
            width="100px"
            alt="about us"
            className="mx-auto md:py-16"
          />
        </div>
        <Element
          className="w-60 mx-auto text-lg mt-6"
        >
          Primary focus is mobilizing talent on demand with flexible engagement
          models
        </Element>
      </div>
    </Element>
  );
};
