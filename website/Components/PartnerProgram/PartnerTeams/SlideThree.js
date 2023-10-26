import React from "react";

const SlideThree = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="h-20 w-full">
        <p className="text-sm ml-8 mt-8 lg:ml-20 lg:text-lg lg:font-normal font-semibold text-gray-400">
          Global Partner Program for Partner Teams & Independent Experts
        </p>
        <p
          style={{ color: "#0572BD" }}
          className="ml-8 text-xl lg:text-3xl  lg:ml-20 text-blue-250 font-medium"
        >
          Target persona
        </p>
      </div>

      <div className="ml-5 h-full w-full absolute flex order-1">
        <img
          className="ml-4 w-1/3 sm:h-1/3 lg:h-2/3 lg:ml-16 lg:w-1/6 sm:w-44 h-1/4"
          src="/images/smiling-attractive-woman-working-laptop-cafe.jpg"
          alt="smiling-attractive-woman-working-laptop-cafe"
        />
        <div className="bg-white border-2 lg:w-52 lg:h-80 shadow-sky-700 shadow-xl border-dashed border-blue-250 h-52 w-36 relative rounded-3xl -ml-4 mt-12">
          <img
            className="h-7 lg:h-12 ml-2 mt-2"
            src="/images/rating (1).png"
            alt="rating (1)"
          />
          <p className="text-blue-600 lg:text-sm lg:mt-3 text-xs ml-2 mt-1">
            Independent Experts
          </p>
          <p className="text-xs lg:mt-4 lg:text-sm mt-1 ml-2">
            Specialists in the following:
          </p>
          <ul className="list-disc ml-6 lg:mt-5 lg:text-sm text-xs mt-1">
            <li>Content</li>
            <li>Consulting</li>
            <li>Design</li>
            <li>Domain</li>
            <li>Tech</li>
            <li>Leadership</li>
          </ul>
        </div>
      </div>
      <div className="flex mt-64 md:mt-60 md:ml-96 lg:ml-96 lg:-mt-10 mx-8 h-1/4 w-full">
        <img
          className="h-44 mt-8 lg:h-72 lg:ml-28 xl:ml-80 lg:w-1/3 w-56"
          src="/images/department-meeting.jpg"
          alt="department-meeting"
        />
        <div className="ml-12 lg:mt-3 mt-12 mr-0 bg-blue-250 h-7 lg:h-12 lg:w-12 w-7 rounded-full"></div>
        <div className="bg-white border-2 lg:h-80 lg:w-44 shadow-sky-700 shadow-xl border-dashed border-blue-250 h-36 w-28 relative rounded-3xl -ml-36 mt-20">
          <img
            className="h-7 lg:h-12 ml-2 mt-3"
            src="/images/leadership.png"
            alt="leadership"
          />

          <p className="text-blue-600 text-xs lg:mt-3 ml-2 lg:text-sm ">
            Partner Teams
          </p>
          <p className="text-xs lg:text-sm lg:mt-3 ml-2">
            Specialists in the following:
          </p>
          <ul className="list-disc ml-7 lg:text-sm text-xs mt-1">
            <li>Consulting</li>
            <li>Domain</li>
            <li>Tech</li>
          </ul>
        </div>
        <div className="ml-32 lg:ml-44 lg:mt-96 mt-56 xl:ml-80 mr-0 bg-blue-250 h-7 w-7 rounded-full absolute lg:h-12 lg:w-12"></div>
        <div className="ml-36 mt-80 lg:ml-72 xl:ml-96 lg:mt-96 xl:mt-80 mr-0 bg-gray-300 h-12 w-12 rounded-full absolute"></div>
        <div className=" -ml-72 xl:absolute xl:items-end xl:-ml-80 text-sm font-bold  h-36 w-44 xl:mt-mt-29 mt-96">
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

export default SlideThree;
