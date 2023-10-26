import React from "react";
import { Link, Element } from "react-scroll";
import Carousel from "react-multi-carousel";
import { ArrowDownIcon } from "../Icons/ArrowDownIcon";

const features = [
  {
    title: "The crux is capability building for growth leveraging Gig Talent",
    image: "./images/graph.svg",
  },
  {
    title:
      "Intent is to move the needle for CXOs and Entrepreneurs to have flexible options to persue capability building.",
    image: "./images/network.svg",
  },
  {
    title:
      "Not necessarily a substitute to working with traditional partners but complement existing ways of working ",
    image: "./images/self-development.svg",
  },
  {
    title: "Promote & Empower Gig Talent",
    image: "./images/synergy-team.svg",
  },
];

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide, totalItems },
  } = rest;
  return (
    <div className="flex justify-center md:hidden mt-4">
      <button
        className={`${
          currentSlide === 0
            ? "disable cursor-not-allowed text-gray-500"
            : "transition ease-in-out transform duration-300 hover:bg-blue-450 hover:text-white"
        } flex border m-1 px-2 py-2 rounded-full bg-white`}
        onClick={() => previous()}
      >
        <div className="transform rotate-90">
          <ArrowDownIcon className="mt-0" />
        </div>
      </button>
      <button
        className={`${
          currentSlide === totalItems - 1
            ? "disable cursor-not-allowed text-gray-500"
            : "transition ease-in-out transform duration-300 hover:bg-blue-450 hover:text-white"
        } flex border m-1 px-2 py-2 rounded-full bg-white`}
        onClick={() => next()}
      >
        <p className="relative bottom-0.5 transform -rotate-90">
          <ArrowDownIcon className="mt-0" />
        </p>
      </button>
    </div>
  );
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 769 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 769, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};
export default function AboutFeature() {
  return (
    <Element name="thewhy" className="md:bg-gray-150 bg-white thewhy">
      <div className="lg:w-3/4 w-full mx-auto md:py-32 py-12">
        <div className="md:grid grid-cols-4 hidden text-center px-4">
          {features.map((item) => {
            return (
              <div
                key={item.id}
                className="w-72 h-100 pb-2 bg-gray-150 mx-4 border-2 border-black"
              >
                <img
                  src={item.image}
                  height="100px"
                  width="120px"
                  alt="about us"
                  className="mx-auto py-12"
                />
                <p className="w-48 mx-auto text-lg mb-4">{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className="md:hidden block pl-12">
          <Carousel
            responsive={responsive}
            customButtonGroup={<ButtonGroup />}
            arrows={false}
            renderButtonGroupOutside={true}
            partialVisible={true}
          >
            {features.map((item, i) => {
              return (
                <div
                  key={item.id}
                  className={`bg-blue-150 py-12 border-2 border-solid  h-full border-blue-200 ${
                    features?.length !== i + 1 && "mr-6"
                  }`}
                >
                  <img
                    src={item.image}
                    height="100px"
                    width="120px"
                    alt="about us"
                    className="mx-auto pb-12"
                  />
                  <p className="w-48 mx-auto text-lg mb-4">{item.title}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Element>
  );
}
