import React, { useState } from "react";
import { MoreAboutSection, MoreAboutSectionData } from "./MoreAboutSection";

const MoreAbout = () => {
  const [expand, setExpand] = useState("1");
  const handleExpand = (val) => {
    setExpand(expand === val ? false : val);
  };
  return (
    <div className="md:px-0 px-4">
      <div className="bg-gray-150 px-4">
        <div className="lg:w-2/4 w-full mx-auto md:py-24 py-8">
          <p className="text-2xl md:font-bold font-medium md:text-left text-center md:mb-0 mb-8"><span className='md:pb-0 md:px-0 px-4'>More About 10XTD Network</span></p>
          <div className="flex flex-wrap items-center -mx-2 md:flex-row flex-col-reverse">
            <div className='md:w-1/2 px-2 w-full'>
              <MoreAboutSection handleExpand={handleExpand} expand={expand} />
            </div>
            <div className="flex flex-col justify-center h-full md:w-1/2 px-2 w-full md:mb-0 mb-6">
              <img
                src={`/images/more-about-${expand ? expand : "1"}.png`}
                alt="More About 10XTD"
                height="800px"
                width="520px"
                className="h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreAbout;
