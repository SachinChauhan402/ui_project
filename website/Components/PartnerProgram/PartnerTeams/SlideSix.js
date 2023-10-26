import React from "react";

const SlideSix = () => {
  return (
    <div className="relative h-screen w-full bg-grey-310">
      <div
        style={{ backgroundColor: "#0572BD" }}
        className=" text-white xl:w-1/2 xl:h-1/6 w-full h-16 text-xs"
      >
        <p className="text-xs xl:text-lg  xl:ml-9 xl:mt-6 mt-4 ml-5 absolute">
          Global Partner Program for Partner Teams & Independent Experts
        </p>
        <p className="text-lg mt-7 xl:mt-12 xl:text-4xl xl:ml-9 mx-12 absolute">
          Insights
        </p>
      </div>
      <div className="flex flex-col xl:flex-row xl:h-3/4 xl:w-1/2 h-1/2 w-1/2 mt-16 ml-2">
        <div className="border-2 p-2 border-dashed radius-13 border-white xl:w-1/2 xl:h-3/4 xl:ml-9 h-4/5 w-full mt-2 ml-4">
          <img
            className="h-7 xl:h-12 xl:ml-8 xl:mt-7 ml-3 mt-3"
            src="/images/consulting.png"
            alt="consulting"
          />
          <p className="text-white xl:ml-16 xl:text-3xl font-light ml-8 text-sm">
            Leadership
            <br /> Insights Series
          </p>
          <div className="h-12 xl:h-24 xl:-mt-24 xl:w-24 w-12 xl:ml-ml-61 absolute ml-44 -mt-10 rounded-full bg-white">
            <img
              className="h-8 xl:h-16 xl:w-16 xl:ml-4 xl:mt-4 ml-2 mt-2 absolute w-8"
              src="/images/video.png"
              alt="video"
            />
          </div>
          <ul className="text-white text-xxs xl:text-sm xl:ml-16 xl:mt-12 xl:p-1 ml-8 mt-3 list-disc">
            <li>
              The partner team/ independent expert has a compelling proposition
              for the CXO Persona
            </li>
            <li>
              Through the Leadership Insights Series , they share highlights of
              their proposition
            </li>
            <li>
              The content is further shared with the network of decision makers
            </li>
          </ul>
        </div>
        <div className="border-2 border-dashed p-2 radius-13 border-white xl:ml-28 xl:h-3/4 xl:mt-2 h-2/3 xl:w-1/2 mt-10 w-full ml-4">
          <img
            className="h-7 ml-3 mt-3 xl:h-12 xl:ml-8 xl:mt-7"
            src="/images/ceo.png"
            alt="ceo"
          />
          <p className="text-white font-light ml-6 mt-1 text-sm xl:ml-16 xl:text-3xl">
            Live Expert <br />
            Session Series
          </p>
          <div className="h-12 xl:h-24 xl:w-24 xl:ml-ml-63 xl:-mt-24 absolute w-12 ml-44 -mt-12 rounded-full bg-white">
            <img
              className="h-8 w-8 ml-2 mt-2 xl:ml-4 xl:mt-4 xl:h-16 xl:w-16 absolute"
              src="/images/video.png"
              alt="video"
            />
          </div>

          <ul className="text-white text-xxs xl:text-sm ml-6 mt-3 list-disc xl:ml-16 xl:mt-12 xl:p-1">
            <li>60 min live sessions for CXOs </li>
            <li>
              Specialist sharing insights on <br />
              digital capabilities of interest
            </li>
            <li>Engage target decision makers</li>
            <li>
              Session highlights reviewed, <br /> edited and shared with network
              <br /> of decision makers
            </li>
          </ul>
        </div>
      </div>
      <div className=" ml-3 xl:absolute xl:items-end xl:ml-12 text-sm font-bold text-white h-36 w-44 xl:-mt-16 mt-52">
        <p>10XTD</p>
        <hr className="w-8 -mt-2 border border-white transform rotate-90 ml-8" />
        <p className="text-white text-smm leading-tight ml-14 -mt-4">
          Digital on Demand
          <br />
          Platform for Growth
          <br />
          Network of CXOs,
          <br />
          Entrepreneurs, Experts, Talent
        </p>
      </div>
      <div className="h-full w-1/2 flex">
        <img
          className="h-2/6 w-1/3 ml-80 xl:h-full right-0 bottom-0 absolute"
          src="/images/modern-microphone.jpg"
          alt="modern-microphone"
        />
      </div>
    </div>
  );
};

export default SlideSix;
