import React from "react";
import FeatureCard from "../common/FeatureCard";

const featuresList = [
  {
    image: "./images/Content.svg",
    title: "Content",
    description: "Seasoned Copywriters, Editors, and Content Writers",
  },
  {
    image: "./images/Layer.svg",
    title: "Consulting",
    description:
      "Experts in Management Consulting, Digital Consulting, Innovation, Tech Consulting",
  },
  {
    image: "./images/Design.svg",
    title: "Design",
    description:
      "Graphic Designers, UX Designers, UI Designers, Product Designers and Design Thinkers",
  },
  {
    image: "./images/Domain.svg",
    title: "Domain",
    description:
      "Specialists across functions of HR, Finance, Sales, Supply Chain, Manufacturing, R&D and Marketing ",
  },
  {
    image: "./images/Leadership.svg",
    title: "Leadership",
    description: " CXO, Entrepreneurs, Promoters, CXO-1",
  },
  {
    image: "./images/Technology.svg",
    title: "Technology",
    description:
      "Developers, Engineers, Project Managers, Engineering Managers and Solution Architects ",
  },
];

const Features = () => {
  return (
    <div className="pt-12 pb-12 sm:pb-0 text-center  mx-auto max-w-4xl sm:px-0 sm:bg-white bg-gray-100">
      <h1 className="sm:text-4xl sm:font-small px-6 text-xl font-medium">
        On Demand Partner for the CXOs and Entrepreneurs
      </h1>
      <p className="text-sm my-2 text-gray px-6">
        Connect with Network of Talent Operating across Australia,
        Bangladesh, Germany, Dubai and India for all your business needs
      </p>

      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 my-4 text-center px-6">
        {featuresList.map((item,index) => {
          return (
            <div key={index}>
              <FeatureCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
