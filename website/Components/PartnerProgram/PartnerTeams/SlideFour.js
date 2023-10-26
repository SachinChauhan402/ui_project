import React from "react";

const SlideFour = () => {
  return (
    <div className="relative h-screen w-full">
      <div
        style={{ backgroundColor: "#0572BD" }}
        className="bg-blue-600 text-white w-96 xl:w-1/2 xl:relative xl:h-28 lg:w-1/5 lg:h-20 h-16 text-xs"
      >
        <p className="text-xs mt-4 ml-2 lg:text-lg xl:ml-12 lg:font-light absolute">
          Global Partner Program for Partner Teams & Independent Experts
        </p>
        <p className="text-xl mt-7 ml-2 lg:text-2xl xl:text-4xl xl:mt-12 xl:ml-12 lg:mt-9 lg:font-semibold absolute">
          Opportunities
        </p>
      </div>
      <div className="mt-1 flex ">
        <div className="p-3 shadow-2xl xl:ml-12 xl:w-1/2 xl:h-2/3 border-2 w-5/6 h-2/3 lg:h-3/5 radius-15 border-dashed border-blue-250 ml-5 mt-10 lg:w-1/2 absolute">
          <img
            className="h-8 xl:h-12 xl:ml-12 xl:mt-12 ml-8 mt-5"
            src="/images/verification.png"
            alt="verification"
          />
          <p className=" -mt-12 text-xs text-normal xl:text-lg xl:ml-32 xl:-mt-16 text-blue-600 ml-24">
            Profile Curation
          </p>
          <ul className="ml-28 list-disc mt-1 text-xs xl:ml-36 xl:text-sm">
            <li>
              Partner Teams & Independent Experts give their go-ahead for their
              <br />
              respective profiles to the curation team of 10XTD
            </li>
            <li>
              The experienced pool of curators map the proposition of Partner
              <br />
              Teams & Independent Experts
            </li>
            <li className="ml-12">
              Due diligence (what is really standing out)
            </li>
            <li className="ml-12">Services</li>
            <li className="ml-12">Customers</li>
          </ul>
          <img
            className="h-8 ml-7 mt-5 xl:h-12 xl:ml-12 xl:mt-12"
            src="/images/puzzle.png"
            alt="puzzle"
          />
          <p className="-mt-8 text-normal text-blue-600 text-xs ml-24 xl:text-lg xl:-mt-16 xl:ml-32">
            CXO Connect
          </p>
          <ul className="ml-28 xl:ml-36 xl:text-sm list-disc mt-2 text-xs">
            <li>
              Based on discussions with the partner , firm up the desired CXO{" "}
              <br />
              Persona of Interest
            </li>
            <li>
              Curators from 10XTD will recommend the CXO profiles for further{" "}
              <br />
              consideration by the partner
            </li>
            <li>
              Post alignment with the partner , positioning the partner <br />
              proposition with the CXO
            </li>
            <li>Arranging for the walkthrough</li>
            <li>
              Beyond the walkthrough, nudging the stakeholders for realization{" "}
              <br />
              within 100 days
            </li>
          </ul>
        </div>
        <div className="h-1/2 w-full mt-44 lg:ml-96 lg:opacity-100 lg:-mt-10 xl:h-1/2 xl:-mt-16 lg:w-2/3 lg:bg-white sm:mt-5 sm:ml-16 sm:w-3/4 opacity-30 overflow-hidden">
          <img
            className="h-1/2 lg:h-3/4 w-full sm:w-3/4 sm:ml-24 sm:-mt-12 xl:ml-80 lg:ml-44 object-fit"
            src="/images/5329234.jpg"
            alt="5329234"
          />
        </div>
        <div className=" -ml-96 xl:absolute xl:items-end xl:ml-4 text-sm font-bold  h-36 w-44 xl:mt-mt-29 mt-mt-51">
          <p>10XTD</p>
          <hr className="w-8 -mt-2 border border-red-300 transform rotate-90 ml-8" />
          <p className="text-black text-smm leading-tight ml-14 -mt-4">
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

export default SlideFour;
