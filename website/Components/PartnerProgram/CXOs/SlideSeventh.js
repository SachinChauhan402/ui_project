import React from "react";

export const SlideSeventh = () => {
  return (
    <div className="relative w-full h-screen">
      <div>
        <div className="w-full bg-red-300 xl:h-32 h-24 absolute">
          <p className="text-sm mt-3 md:ml-12 sm:mt-5 xl:ml-24 xl:mt-7 sm:text-lg  text-white ml-1 absolute">
            Global Partner Program for CXOs
          </p>
          <p className="mt-7 sm:mt-11 ml-1 xl:text-4xl xl:ml-24 xl:mt-14 xl:font-semibold md:ml-12 text-xl text-white">
            How CXOs have benefited from 10XTD Global Partner Program
          </p>
        </div>
        <div className="flex flex-wrap xl:flex-nowrap">
          <div className="rounded-5xl xl:w-1/5 xl:h-2/3 xl:mt-44 xl:ml-28  p-6 border-2 border-dashed border-red-300 ml-8 mt-36 w-3/4 h-1/4 absolute shadow-10xl">
            <p className=" text-red-300 xl:text-4xl xl:ml-0 xl:mt-3 lg:text-xl lg:ml-6 ml-1 sm:text-lg text-xs -mt-2 font-light">
              10XTD have identified multiple compelling opportunities
            </p>
            <ul className="text-xxs lg:text-lg xl:ml-5 xl:text-lg xl:font-light  xl:mt-16 lg:ml-11 sm:ml-6 sm:text-sm ml-1 list-disc mt-8 font-light">
              <li>For CXOs primarily CDOs, CIOs, CTOs </li>
              <li>
                For multiple experts to provide inputs in digital transformation
                to top tier enterprises
              </li>
            </ul>
          </div>
          <div className="rounded-5xl p-6 xl:-mt-36 xl:w-1/5 xl:h-2/3 xl:ml-ml-98 border-2 bg-white border-dashed border-red-300 ml-3 top-80 relative w-1/2 h-36 shadow-10xl">
            <p className="text-red-300 xl:text-4xl lg:text-xl lg:ml-6 xl:ml-0 xl:mt-3 sm:text-lg ml-1 text-xs -mt-4 font-light">
              Multiple independent experts have leveraged the live expert
              Sessions
            </p>
            <ul className="text-xxs sm:text-sm xl:text-lg xl:ml-5 xl:font-light xl:mb-1 xl:mt-20 lg:text-lg lg:ml-11 sm:ml-6 ml-1 list-disc mt-3 font-light">
              <li>
                Experts have expanded their network with CXOs in India and
                overseas
              </li>
            </ul>
          </div>
          <div className="rounded-5xl xl:ml-ml-102 xl:w-1/5 xl:mt-44 xl:h-2/3 p-6 border-2 border-dashed border-red-300 bg-white ml-4 mt-80 sticky xl:absolute w-3/4 h-32 shadow-11xl">
            <p className="text-red-300 xl:w-56 lg:text-xl xl:text-4xl xl:mt-3 xl:ml-0 lg:ml-6 sm:text-lg ml-1 text-xs -mt-2 font-light">
              Multiple current & aspiring CXOs have leveraged the leadership
              series
            </p>
            <ul className="text-xs xl:text-lg xl:font-light xl:mt-9 lg:text-lg xl:ml-5 lg:ml-11 sm:text-sm sm:ml-6 ml-1 list-disc mt-3 font-light">
              <li>
                The insights shared with key decision makers did reinforce the
                proposition & improve visibility
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-6 absolute xl:absolute xl:items-end xl:ml-4 text-sm font-bold text-black h-36 w-44 xl:mt-80 mt-44">
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
