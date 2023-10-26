import React from "react";

export const SlideThird = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="bg-red-300 text-white w-52 xl:w-1/4 xl:h-28 lg:w-1/5 lg:h-20 h-16 text-xs">
        <p className="text-xs mt-4 ml-2 lg:text-lg xl:ml-12 lg:font-light absolute">
          Global Partner Program for CXOs
        </p>
        <p className="text-xl mt-7 ml-2 lg:text-2xl xl:text-4xl xl:mt-12 xl:ml-12 lg:mt-9 lg:font-semibold absolute">
          Opportunities
        </p>
      </div>
      <div className="mt-1 flex">
        <div className=" shadow-2xl-red  p-2 xl:ml-24 xl:w-2/5 xl:h-2/3 border-2 w-5/6 h-3/5 lg:h-3/5 radius-15 border-dashed border-red-300 ml-5 mt-2 lg:w-1/2 absolute">
          <img
            className="h-8 xl:h-12 xl:ml-12 xl:mt-12 ml-8 mt-5"
            src="/images/verification.png"
            alt="verification"
          />
          <p className=" -mt-12 text-xs text-normal xl:text-lg xl:ml-32 xl:-mt-16 text-red-300 ml-24">
            CXO Profile Curation
          </p>
          <ul className="ml-28 list-disc xl:w-80 mt-1 text-xs xl:ml-36 xl:text-sm">
            <li>
              CXOs give their go-ahead for their respective profiles to the
              curation team of 10XTD
            </li>
            <li>
              The experienced pool of curators map the proposition of CXOs
            </li>
          </ul>
          <img
            className="h-8 ml-7 mt-5 xl:h-12 xl:ml-12 xl:mt-36"
            src="/images/puzzle.png"
            alt="puzzle"
          />
          <p className="-mt-8 text-normal text-red-300 text-xs ml-24 xl:text-lg xl:-mt-24 xl:ml-32">
            Connecting CXOs with Opportunities from Network
          </p>
          <ul className="ml-28 xl:ml-36 xl:text-sm list-disc mt-2 text-xs">
            <li>Against new opportunities from the network</li>
            <li className="xl:w-80 xl:ml-10">
              The curation team matches the same with the proposition of CXOs
            </li>
            <li className="xl:w-80 xl:ml-10">
              Relevant opportunities are passed on to the CXOs their
              consideration
            </li>
            <li>Positioning Niche Partners</li>
            <li className="xl:w-80 xl:ml-10">
              Compelling Niche Partners are curated and positioned for
              consideration by the. CXOs
            </li>
          </ul>
        </div>
        <div className="h-1/2 w-full mt-28 lg:ml-96 lg:opacity-100 lg:-mt-10 xl:h-1/2 xl:-mt-16 lg:w-2/3 lg:bg-white sm:mt-5 sm:ml-16 sm:w-3/4 opacity-30 overflow-hidden">
          <img
            className="h-1/2 lg:h-3/4 w-full sm:w-3/4 sm:ml-24 sm:-mt-12 xl:ml-80 lg:ml-44 object-fit"
            src="/images/5329234.jpg"
            alt="5329234"
          />
        </div>
        <div className=" -ml-96 xl:absolute xl:items-end xl:ml-8 text-sm font-bold  h-36 w-44 xl:mt-mt-29 mt-mt-51">
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
