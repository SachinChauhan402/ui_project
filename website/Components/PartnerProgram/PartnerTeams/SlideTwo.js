import React from "react";

const SlideTwo = () => {
  return (
    <div className="h-screen flex">
      <div className="h-1/3 w-full xl:h-1/5 flex bg-white">
        <div className="h-1/3 xl:h-full w-1/5">
          <img
            className="h-full xl:h-full xl:-mt-3"
            src="/images/77880.jpg"
            alt="77880"
          />
        </div>
        <div className=" sm:flex-col sm:ml-24 md:ml-80 mt-3 xl:mt-0 ml-3 xl:ml-32">
          <p className="text-black flex justify-center xl:text-2xl text-lg mt-2 font-extrabold">
            10XTD
          </p>
          <p className=" text-xs flex justify-center xl:text-2xl text-gray-400">
            Network of CXOs, Entrepreneurs, Experts, Talent
          </p>
          <p className="text-sm flex justify-center xl:text-2xl font-semibold text-blue-250">
            Areas of interest
          </p>
        </div>
      </div>

      <div
        style={{ backgroundColor: "#0572BD" }}
        className="h-cus-h-21 w-full absolute xl:mt-28 xl:flex xl:h-cus-h-20 xl:w-full xl:flex-row mt-24 flex flex-col "
      >
        <div className="h-1/6 xl:h-1/3 xl:w-full">
          <p className="text-white text-sm xl:text-2xl xl:mt-20 flex justify-center  mt-2 xl:ml-16 font-semibold">
            Global Partner Program <br /> for Partner Teams & Independent
            Experts
          </p>
          <p className="text-white text-xs xl:text-xl font-light flex xl:ml-16 justify-center ">
            Network initiatives supporting growth aspirations of partners
          </p>
        </div>

        <div className="flex flex-col xl:w-full xl:mt-mt-20 xl:-ml-96 xl:h-10 mt-36 mb-4 relative">
          <p className="text-yellow-570 xl:text-xl xl:-ml-96 font-semibold text-xs flex justify-center tracking-wider">
            On-Demand Partner for CXOs & Entrepreneurs
          </p>
          <p className="text-yellow-570 xl:-ml-96 xl:text-lg font-light text-xs flex justify-center">
            Expert On Demand Tech staffing Leadership hiring
          </p>
        </div>
        <hr className="border-1  border-white w-full xl:transform xl:rotate-90 xl:mt-72 xl:-ml-96" />
        <div className="h-2/3 w-full xl:-ml-20 p-2 grid grid-gap ">
          <div className="flex xl:-ml-44">
            <img
              className="h-7 xl:h-12 xl:-ml-5 mt-4"
              src="/images/leadership.png"
              alt="leadership"
            />
            <p className="text-white xl:w-56 font-semibold xl:ml-6 xl:text-xl w-44 text-sm mt-4 ml-2">
              Connect
            </p>
            <ul className="text-white font-normal  xl:text-sm xl:mt-4 xl:ml-1 text-xs  ml-0 list-disc ">
              <li>One-on-one connects with CXOs in India and overseas</li>
              <li>
                Nudging the stakeholders towards realization within 100 days
                post walkthrough
              </li>
            </ul>
          </div>
          <hr className="border-1 border-white border-dashed w-11/12 mt-2 xl:-ml-52 xl:w-full -ml-3 xl:mt-5" />
          <div className="flex xl:-ml-44 mt-3 xl:mt-0">
            <img
              className="h-7 mt-4 xl:h-12 xl:-ml-5"
              src="/images/value.png"
              alt="value"
            />
            <p className="text-white w-36 xl:w-56 font-semibold text-sm mt-4 ml-2 xl:ml-6 xl:text-xl">
              Visibility
            </p>
            <ul className="text-white font-normal text-xs   ml-0 list-disc xl:text-sm xl:mt-4 xl:ml-0">
              <li>Improving visibility through broadcasts </li>
              <li>
                Content specialist support to augment leadership profiles &
                blogs
              </li>
            </ul>
          </div>
          <hr className="border-1 border-white border-dashed w-11/12 mt-2 -ml-3 xl:-ml-52 xl:w-full xl:mt-5" />
          <div className="flex xl:-ml-44 mt-3">
            <img
              className="h-7 mt-4 xl:mt-1 xl:h-12 xl:-ml-5"
              src="/images/ceo.png"
              alt="ceo"
            />
            <p className="text-white w-24 xl:w-56 font-semibold text-sm mt-1 ml-2 xl:ml-6 xl:text-xl">
              Live Expert <br />
              Sessions
            </p>
            <ul className="text-white font-normal xl:ml-0 text-xs  ml-2.5 list-disc xl:text-sm xl:mt-4 ">
              <li>Experts, partners engaging CXOs</li>
              <li>Leaders expanding their professional network</li>
            </ul>
          </div>
          <hr className="border-1 border-white border-dashed w-11/12 mt-2 -ml-3 xl:-ml-52 xl:w-full xl:mt-5" />
          <div className="flex xl:-ml-44 xl:mt-1 mt-3">
            <img
              className="h-7 mt-4 xl:h-12 xl:-ml-5"
              src="/images/consulting.png"
              alt="consulting"
            />
            <p className="text-white w-24 font-semibold text-sm mt-1 ml-2 xl:w-56 xl:ml-6 xl:text-xl">
              Leadership
              <br />
              Insights
            </p>
            <ul className="text-white font-normal text-xs mt-1 ml-2.5 list-disc xl:text-sm xl:mt-4 xl:ml-0">
              <li>
                Sharing proposition/ point of view through
                <br /> leadership Insights
              </li>
            </ul>
          </div>
          <hr className="border-1 border-white border-dashed w-11/12 mt-2 -ml-3 xl:-ml-52 xl:w-full xl:mt-5" />
          <div className="flex xl:-ml-44 xl:mt-1 mt-3">
            <img
              className="h-7 mt-4 xl:h-12 xl:-ml-5"
              src="/images/tent.png"
              alt="tent"
            />
            <p className="text-white w-32 xl:w-56 font-semibold text-sm mt-3 ml-2 xl:ml-6 xl:text-xl">
              Bootcamps
            </p>
            <ul className="text-white mt-2 font-normal text-xs  -ml-1 list-disc xl:text-sm xl:mt-4 xl:ml-0">
              <li>Facilitate collaboration through reimagining boot camps </li>
            </ul>
          </div>
          <hr className="border-1 border-white border-dashed w-11/12 mt-2 -ml-3 xl:-ml-52 xl:w-full xl:mt-5" />
          <div className="flex xl:-ml-44 xl:mt-0 mt-3">
            <img
              className="h-7 mt-4 xl:h-12 xl:mt-12 xl:-ml-5"
              src="/images/rating.png"
              alt="rating"
            />
            <p className="text-yellow-570 font-semibold text-sm mt-3 ml-2 xl:ml-7 xl:text-xl xl:mt-10">
              Talent
              <br />
              fulfillment
            </p>
            <ul className="text-yellow-570 font-normal text-xs ml-7 list-disc xl:text-sm xl:mt-6 xl:ml-24">
              <li>
                Categories include: Content Consulting,
                <br /> Design, Domain, Leadership and Tech  
              </li>
              <li className="mt-3">
                Sponsors include: Global Thought Leaders,
                <br /> Emerging Enterprises, Global Corporations
              </li>
            </ul>
          </div>
        </div>
        <div className=" ml-2 xl:absolute xl:items-end text-sm font-bold  h-36 w-44 xl:mt-mt-29 mt-20">
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

export default SlideTwo;
