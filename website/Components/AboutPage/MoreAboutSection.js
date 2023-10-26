import React from "react";
import { CloseIcon } from "../Icons/CloseIcon";

export const MoreAboutSectionData = [
  {
    title: "Primary Focus",
    key: "1",
    description:
      "Primary focus is mobilizing talent on demand with flexible engagement models",
    image: "/images/more-about-1.png",
  },
  {
    title: "Talent Persona",
    key: "2",
    description:
      "Talent Persona (student, early stage, experienced, freelance, expert, entrepreneurial)",
    image: "/images/more-about-4.png",
  },
  {
    title: "Skills Categories",
    key: "3",
    description:
      "Categories (Content, Consulting, Design, Domain, Leadership, Tech)",
    image: "/images/more-about-3.png",
  },
  {
    title: "Sponsors",
    key: "4",
    description:
      "Sponsors include Global thought Leaders, Emerging Enterprises,  Global Corporations across Canada, Germany, India, Singapore ",
    image: "/images/more-about-4.png",
  },
  {
    title: "Network of Talent",
    key: "5",
    description:
      "Network of Talent operating across Australia, Bangladesh, Germany, Dubai, India",
    image: "/images/more-about-5.png",
  },
];

export const MoreAboutSection = ({ handleExpand, expand }) => {
  return (
    <div>
      {MoreAboutSectionData.map((data, index) => {
        return (
          <div
            className={`${index===MoreAboutSectionData.length-1 ? "border-b-2 border-t-2" : "border-t-2"} border-black border-black p-2 cursor-pointer ${
              expand === data.key && "text-blue-600"
            }`}
            key={index}
          >
            <div
              className=" flex justify-between"
              onClick={() => handleExpand(data.key)}
            >
              <p className="text-lg">{data.title}</p>
              <div
                className={`transform duration-300 ${
                  expand !== data.key && "rotate-45"
                }`}
              >
                <CloseIcon />
              </div>
            </div>
            {expand === data.key && (
              <div>
                <p>{data.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
