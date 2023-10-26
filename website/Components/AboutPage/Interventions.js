import React, { useState } from "react";
import IntervationCarousal from "./IntervationCarousal";

const Primary = [
  "Singapore based Global Think Tank leveraging a pool of gig talent across content, design, consulting (from intern to experienced talent)",
  "Multiple SaaS software founders leveraging Silicon valley Tech experts to help scale thier Digital Product",
  "Germany based Global ecommerce major leveraging niche experts in cloud technologies in their supply chain analytics trasformation",
];

const Secondary = [
  "Multiple corporates leveraging compelling profiles for Digital/IT leadership Roles",
  "Multiple corporates leveraging compelling profiles for Digital/IT leadership Roles",
  "Multiple corporates leveraging compelling profiles for Digital/IT leadership Roles",
];

export default function Interventions() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="max-w-2xl mx-auto">
      <p className="md:text-4xl text-2xl text-center md:py-12 py-6 font-medium">
        Kind of Interventions
      </p>
      <div className=" text-center px-6">
        <div className="md:block flex">
          <div className="md:px-0 px-2">
            <button
              className={`py-4 px-6 font-light   md:text-xl  text-sm bg-gray-50 md:rounded-none rounded-lg ${
                activeTab === 1
                  ? "md:bg-blue-350 md:text-white border-2 border-blue-700 "
                  : " md:border-none border-2 border-gray-400"
              } focus:border-4 focus:border-blue-300 `}
              onClick={() => setActiveTab(1)}
            >
              On Demand Roles (Primary Focus)
            </button>
          </div>
          <div className="md:px-0 px-2">
            <button
              className={`py-4 px-6 font-light   md:text-xl  text-sm bg-gray-50 md:rounded-none rounded-lg ${
                activeTab === 2
                  ? "md:bg-blue-350 md:text-white border-2 border-blue-700"
                  : "md:border-none border-2 border-gray-400"
              } focus:border-4 focus:border-blue-300 `}
              onClick={() => setActiveTab(2)}
            >
              Hiring for Growth Roles (Need Based)
            </button>
          </div>
        </div>

        <div className='md:mt-24 md:mb-24 mt-8 mb-16'>
          {activeTab === 1 ? (
            <IntervationCarousal interventions={Primary} />
          ) : (
            <IntervationCarousal interventions={Secondary} />
          )}
        </div>
      </div>
    </div>
  );
}
