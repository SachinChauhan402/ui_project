import React from "react";

const SlideNine = () => {
  return (
    <div
      style={{ backgroundColor: "#0572BD" }}
      className="relative bg-blue-600 w-full h-full"
    >
      <div className="absolute top-5 left-7">
        <p className="text-xs sm:text-sm text-white">
          Global Partner Program for Partner Teams & Independent Experts
        </p>
        <p className="mt-1 text-lg xl:text-3xl sm:text-2xl text-white">
          Hybrid Model
        </p>
      </div>
      <div className="h-2/3 mt-24 ml-9 w-4/5 xl:mt-32  absolute">
        <hr className="w-full border-1 border-blue-200" />
        <div className="h-table-8 w-full flex p-2">
          <p className="text-xs font-semibold xl:text-lg xl:mt-2 w-40 text-white sm:text-sm">
            Partner access
          </p>
          <p className="text-xs ml-8 sm:ml-1 font-semibold xl:text-lg xl:mt-2 xl:ml-24 sm:w-44 flex justify-center text-white sm:text-sm">
            Service Summary
          </p>
          <p className="ml-16 xl:text-lg xl:mt-2 xl:ml-96 text-xs font-semibold text-white ml-53 sm:text-sm">
            Consideration
          </p>
        </div>
        <hr className="w-full border-1 border-blue-200" />
        <div className="h-1/3 w-full bg-blue-520 flex p-1">
          <p className="mt-2 text-white xl:w-28 font-light text-xxs xl:text-lg w-64 sm:text-sm">
            Opportunities
          </p>
          <ul className=" sm:ml-24 xl:text-lg xl:mt-2 xl:w-2/5 xl:ml-48 sticky text-white font-light text-xxs sm:text-sm list-disc">
            <li>Mapping the proposition</li>
            <li>Setting up walkthrough with CXOs</li>
            <li>
              Nudging the stakeholders towards realization within 100 days post
              walkthrough
            </li>
          </ul>
          <ul className="ml-12 xl:ml-28 mt-2 xl:text-lg text-white font-light text-xxs sm:text-sm list-disc">
            <li>Free</li>
            <li>Paid</li>
            <li>Paid</li>
          </ul>
        </div>
        <div className="h-table-12 w-full flex">
          <p className=" mt-2 xl:text-lg xl:w-72 text-white font-light text-xxs sm:text-sm p-1 w-28">
            Improve visibility
          </p>
          <ul className="  p-1 xl:w-96 xl:ml-4 sm:ml-24 xl:mt-2 xl:text-lg sticky text-white font-light text-xxs sm:text-sm list-disc">
            <li>Augment Social Profile of Partner</li>
          </ul>
          <ul className="ml-12 xl:ml-52 xl:text-lg mt-2 text-white font-light text-xxs sm:text-sm list-disc">
            <li className="xl:ml-2">Paid</li>
          </ul>
        </div>
        <div className="h-table-12 w-full bg-bluelight-530 flex">
          <p className="p-1  mt-2 text-white xl:w-72 font-light xl:text-lg text-xxs sm:text-sm">
            Leadership insights
          </p>
          <ul className="ml-6 xl:ml-5 xl:text-lg sm:ml-16 xl:w-96 mt-2 text-white sticky font-light text-xxs sm:text-sm list-disc">
            <li>Video recorded interviews of leaders</li>
          </ul>
          <ul className="ml-12 xl:ml-52 mt-2 sm:ml-28 p-1 text-white xl:text-lg font-light text-xxs sm:text-sm list-disc">
            <li className="xl:ml-0  ">Paid</li>
          </ul>
        </div>
        <div className="h-1/6 w-full bg-blue-520 flex">
          <p className="p-1 mt-2 text-white font-light xl:w-72 text-xxs xl:text-lg sm:text-sm">
            Live expert sessions
          </p>
          <ul className=" ml-8 xl:text-lg sm:ml-16 xl:ml-5 mt-2 text-white sticky font-light text-xxs sm:text-sm list-disc">
            <li>Engaging Group of CXOs & decision makers</li>
          </ul>
          <ul className="ml-12 xl:ml-72 xl:text-lg sm:ml-16 mt-2 text-white font-light text-xxs sm:text-sm list-disc">
            <li className="xl:-ml-6">Paid</li>
          </ul>
        </div>
        <div className="h-table-8 w-full  bg-blue-520 flex">
          <p className="p-1 -mt-2 xl:w-72 xl:text-lg text-white font-light w-24 text-xxs sm:text-sm">
            Reimagine bootcamps
          </p>
          <ul className=" ml-5 xl:text-lg xl:ml-5 xl:w-1/2 sm:ml-16 w-40 -mt-2 text-white sticky sm:-mt-3  font-light text-xxs sm:text-sm list-disc">
            <li>
              Bringing together stakeholders for problem definition, alignment,
              <br /> ideation and action planning
            </li>
          </ul>
          <ul className=" mt-2 xl:text-lg xl:-ml-4 text-white font-light text-xxs sm:text-sm list-disc">
            <li className="ml-11 xl:ml-1">Paid</li>
          </ul>
        </div>
        <hr className="w-full border-1 border-blue-200 " />
      </div>
      <div className="ml-6 absolute xl:absolute xl:items-end xl:ml-12 text-sm font-bold text-black h-36 w-44 xl:mt-mt-93 mt-mt-99">
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
  );
};

export default SlideNine;
