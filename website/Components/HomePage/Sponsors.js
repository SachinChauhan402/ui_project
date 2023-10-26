import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { ArrowIcon } from "../Icons/ArrowIcon";
import "react-multi-carousel/lib/styles.css";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide, totalItems },
  } = rest;
  return (
    <div className='md:hidden'>
      <button
        className={`${
          currentSlide === 0
            ? "disable cursor-not-allowed text-gray-500"
            : "transition ease-in-out transform duration-300 hover:bg-blue-450 hover:text-white"
        } flex border mx-3 px-2 py-2 rounded-3xl bg-white absolute -left-7 top-0 transform translate-y-1/4`}
        onClick={() => previous()}
      >
        <div className="transform rotate-180">
        <ArrowIcon className='mt-0' height='h-4 w-4' width='w-4'/>
        </div>
      </button>
      <button
        className={`${
          currentSlide === totalItems - 1
            ? "disable cursor-not-allowed text-gray-500"
            : "transition ease-in-out transform duration-300 hover:bg-blue-450 hover:text-white"
        } flex border mx-3 px-2 py-2 rounded-3xl bg-white absolute -right-7 top-0 transform translate-y-1/4 `}
        onClick={() => next()}
      >
        <p className="relative bottom-0.5">
        <ArrowIcon className='mt-0' height='h-4 w-4' width='w-4'/>
        </p>
      </button>
    </div>
  );
};
const data = [
  {
    img: "/images/Dr_Reddy.png",
  },
  {
    img: "/images/Pidilite_logo.png",
  },
  {
    img: "/images/yokohama.png",
  },
  {
    img: "/images/borosil.png",
  },
  {
    img: "/images/jswpaints.png",
  },
  {
    img: "/images/marico.png",
  },
  {
    img: "/images/upl.png",
  },
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};
const Sponsors = () => {
  return (
    <div className="sm:bg-gray-100">
      <div className="flex justify-center py-4 mx-auto w-10/12 flex-wrap">
        <p className="text-gray-700 md:w-1/5 w-full md:text-left text-center md:mb-0 mb-2">
          Entrepreneurs {"&"} CXOs Leveraging 10XTD Network
        </p>
        <div className="flex justify-around md:w-4/5 w-full sponsors px-8 relative items-center">
          <Carousel
            responsive={responsive}
            customButtonGroup={<ButtonGroup />}
            arrows={false}
            renderButtonGroupOutside={true}
            className="w-full"
          >
            {data.map((item, i) => {
              return (
                <img
                  className="max-h-12 mx-auto "
                  src={item.img}
                  key={i}
                  alt={i}
                  width="auto"
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
