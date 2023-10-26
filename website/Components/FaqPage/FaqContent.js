import React, { useState } from "react";
import { ArrowDownIcon } from "../Icons/ArrowDownIcon";
import { isMobile } from "react-device-detect";


const MoreAboutSectionData = [
  {
    title: "How can CXO's and Entreprenuers leverage 10XTD?",
    key: "primary",
    description: "They share On Demand Requirements",
  },
  {
    title:
      "How can Experts, Freelance Talent, Intern Talent, Staffing Partners leverage 10XTD?",
    key: "talent",
    description:
      "They register their profile Oppurtunities relevant are passed on to the talent post due-diligence by 10XTD",
  },
  {
    title:
      "How can Talent contribute to capability building and operations of 10XTD?",
    key: "skills",
    description: `
    <div>
      <p>
        Freelance talent can register their profile and express interest to consider the contributor program of 10XTD.<br /> Contributors take up the following role:
      </p>
      <ul>
        <li>- Finding Talent</li>
        <li>- Curating Talent</li>
        <li>- Providing oversight in transaction with Sponsorss.</li>
        <li>- Supporting Front Office Interactions</li>
        <li>- Supporting back office operations</li>
        <li>- Content writing</li>
        <li>- Video Edit Support</li>
      </ul>
    </div>`,
  },
  {
    title: "How can CXO's and Entreprenuers share requirements with 10XTD?",
    key: "sponsors",
    description:`
      <p>The CXO's and Entrprenuers can send the brief to curation@10xtd.in</p>
      <p>Good if the brief covers the following</p>
      <p>- Context</p>
      <p>- Scope</p>
      <p>- Expectaions</p>
      <p>- Considerations (Duration, Budget for 160 hours monthly)</p>
    `,
  },
  {
    title: "How can talent get access to requirements?",
    key: "network",
    description:`
      <p>- Selected requirements will be posted in the LinkedIn account of 10XTD.</p>
      <p>- For other requirements, 10XTD will reach out to the talent directly with the brief</p>
      <p>- Talent can send the inputs as per the brief to frontoffice@10xtd.in</p>
    `,
  },
];

const FaqContent = ({height}) => {
  const [expand, setExpand] = useState("");
  const handleExpand = (val) => {
    setExpand(val === expand ? false : val);
  };
  return (
    <div className="min-h-screen md:mt-16 mt-24">
      <div>
        <div className="bg-blue-450">
          <p className="text-center text-white md:text-6xl text-3xl font-semibold md:p-32 p-16">
            Frequently Asked Questions (FAQs)
          </p>
        </div>
        <div className="max-w-3xl px-6 w-full mx-auto md:pt-24 pb-24 pt-4">
          {MoreAboutSectionData.map((data, index) => {
            return (
              <div
                className={`border-b-2 border-gray-300 p-2 cursor-pointer`}
                key={index}
              >
                <div
                  className=" flex justify-between"
                  onClick={() => handleExpand(data.key)}
                >
                  <p className={`text-lg ${
                  expand === data.key && "text-blue-600"
                }`}>{data.title}</p>
                  <div
                    className={`transform duration-300 ${
                      expand === data.key && "rotate-180"
                    }`}
                  >
                    <ArrowDownIcon />
                  </div>
                </div>
                {expand === data.key && (
                  <div>
                    <p
                    className="text-sm leading-8 text-gray-600"
                      dangerouslySetInnerHTML={{ __html: data.description }}
                    ></p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqContent;
