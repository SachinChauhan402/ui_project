import React from "react";
import Carousel from "react-multi-carousel";
import { ArrowDownIcon } from "../Icons/ArrowDownIcon";

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide, totalItems },
  } = rest;
  return (
    <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-center">
      <button
        className={`${
          currentSlide === 0
            ? "disable cursor-not-allowed text-gray-500"
            : "transition ease-in-out transform duration-300 hover:bg-gray-400 hover:text-white"
        } flex border md:px-4 px-2 md:py-3 py-1 opacity-60  rounded-full md:bg-gray-900 md:border-none border-gray-900  md:-ml-24 `}
        onClick={() => previous()}
      >
        <div className="py-1 text-2xl text-white transform rotate-90"><ArrowDownIcon className='md:text-white text-gray-900 ' height={"md:h-6 h-4"} width={"md:w-6 w-4"}/></div>
      </button>
      <button
        className={`${
          currentSlide === totalItems - 1
            ? "disable cursor-not-allowed text-gray-500"
            : "transition ease-in-out transform duration-300 hover:bg-gray-400 hover:text-white"
        } flex border md:px-4 px-2 md:py-3 py-1 opacity-60 rounded-full  md:-mr-24 md:bg-gray-900 md:border-none border-gray-900`}
        onClick={() => next()}
      >
        <p className="py-1 text-2xl text-white transform -rotate-90"><ArrowDownIcon className='md:text-white text-gray-900' height={"md:h-6 h-4"} width={"md:w-6 w-4"}/></p>
      </button>
    </div>
  );
};

export default function IntervationCarousal({ interventions }) {
  return (
    <div className="relative">
      <Carousel
        responsive={responsive}
        infinite
        // autoPlay
        arrows={false}
        customButtonGroup={<ButtonGroup />}
        renderButtonGroupOutside={true}
      >
        {interventions.map((item, index) => {
          return (
            <div key={index} className="mx-auto md:w-1/2 w-full md:px-24 px-14">
              <p className="text-gray-500 text-lg">{item}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
