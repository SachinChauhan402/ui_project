import React from "react";

const SlideOne = () => {
  return (
    <div className="h-screen md:flex">
      <div className="h-1/2 w-full sm:h-3/5 md:h-full md:w-1/2 order-2 lg:w-2/5 lg:ml-40">
        <img
          className="w-full h-full"
          src="/images/missile.png"
          alt="missile"
        />
      </div>
      <div className="h-1/2  w-full md:h-full md:w-1/2">
        <p className="text-black flex mt-12 md:mt-80 xl:ml-20 justify-center xl:justify-start lg:text-3xl text-xl font-extrabold">
          10XTD
          <span style={{ color: "#ed6410", fontWeight: 500 }} className="ml-1">
            Network
          </span>
        </p>
        <p className="text-lg justify-center mt-2 flex xl:-ml-2  lg:text-4xl text-blue-250 font-medium">
          Global Partner Program
          <br />
          Partner Teams/Independent Experts
        </p>

        <p
          style={{ color: "#7E7E7E" }}
          className="text-lg justify-center xl:justify-start flex xl:ml-20 lg:text-2xl font-normal text-grey-300"
        >
          Your Growth Partner
        </p>
        <div className="xl:h-1/5 xl:w-1/2  sticky bottom-0 right-0">
          <p className="text-black ml-4 text-lg xl:mt-24 xl:ml-4 mt-20 font-extrabold">
            10XTD
          </p>
          <hr className="w-11 border-2  -mt-4 ml-14 absolute  border-orange-100 transform rotate-90" />
          <p className="text-black custom-font-1  -mt-8 ml-ml-27 font-extrabold">
            Digital on Demand
            <br />
            Platform for Growth
            <br />
            Network of CXOs,
            <br />
            Entrepreneurs, Experts, Talent
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideOne;
