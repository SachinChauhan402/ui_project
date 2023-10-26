import React from "react";
import { PromotionSection } from "./PromotionSection";
import MoreAbout from "./MoreAbout";
import Interventions from "./Interventions";
import AboutFeature from "./AboutFeature";
import HowWeWork from "./HowWeWork";
import { Link, Element } from "react-scroll";

const Promotion = ({  }) => {
  const [activeTab, setActiveTab] = React.useState("what");

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className='md:mt-16 mt-24'>
      <div className="bg-about-pattern bg-center bg-no-repeat bg-cover h-full w-full">
        <div className="text-center text-white">
          <p className="pt-64 pb-12 text-xl font-semibold">About 10XTD</p>
          <p className="text-5xl pb-16">We Promote {"&"} Empower Gig Talent</p>
        </div>
      </div>
      <div className="flex justify-around mx-auto h-20 -mt-7 lg:w-2/4 sm:w-full bg-white shadow sticky top-12 z-10 md:bg-white bg-gray-150">
        <Link
          to="thewhat"
          className={`my-auto text-2xl cursor-pointer ${
            activeTab === "what" && "text-blue-450"
          }`}
          spy={true}
          onSetActive={() => handleActiveTab("what")}
          onClick={() => handleActiveTab("what")}
          offset={-180}
        >
          <p>
            The What
            {activeTab === "what" && (
              <hr className="p-0.5 border-b-2 border-blue-600 bg-blue-600 relative top-5 w-full" />
            )}
          </p>
        </Link>
        <Link
          to="thewhy"
          className={`my-auto text-2xl cursor-pointer md:block hidden thewhy ${
            activeTab === "why" && "text-blue-450"
          }`}
          spy={true}
          onSetActive={() => handleActiveTab("why")}
          onClick={() => handleActiveTab("why")}
          offset={-180}
        >
          <p>
            The Why
            {activeTab === "why" && (
              <hr className="p-0.5 border-b-2 border-blue-600 bg-blue-600 relative top-5 w-full" />
            )}
          </p>
        </Link>
        <Link
          to="thehow"
          className={`my-auto text-2xl cursor-pointer md:block hidden ${
            activeTab === "how" && "text-blue-450"
          }`}
          spy={true}
          onSetActive={() => handleActiveTab("how")}
          onClick={() => handleActiveTab("how")}
          offset={-180}
        >
          <p>
            The How
            {activeTab === "how" && (
              <hr className="p-0.5 border-b-2 border-blue-600 bg-blue-600 relative top-5 w-full" />
            )}
          </p>
        </Link>
      </div>
      <PromotionSection activeTab={activeTab} />

      <Element name="thewhat">
        <MoreAbout />
        <Interventions />
      </Element>
      <div className="flex  md:hidden block justify-around mx-auto h-20 -mt-7 lg:w-2/4 sm:w-full bg-white shadow sticky top-12 z-10 md:bg-white bg-gray-150">
        <Link
          className={`my-auto text-2xl cursor-pointer thewhy text-blue-450`}
        >
          <p>
            The Why
            <hr className="p-0.5 border-b-2 border-blue-600 bg-blue-600 relative top-5 w-full" />
          </p>
        </Link>
      </div>
      <AboutFeature />
      <div className="flex md:hidden block justify-around mx-auto h-20 -mt-7 lg:w-2/4 sm:w-full bg-white shadow sticky top-12 z-10 md:bg-white bg-gray-150">
        <Link
          to="thehow"
          className={`my-auto text-2xl cursor-pointer text-blue-450`}
        >
          <p>
            The How
            <hr className="p-0.5 border-b-2 border-blue-600 bg-blue-600 relative top-5 w-full" />
          </p>
        </Link>
      </div>
      <HowWeWork />
    </div>
  );
};

export default Promotion;
