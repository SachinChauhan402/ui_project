import React from "react";
import Carousel from "react-multi-carousel";
import { ArrowIcon } from "../Icons/ArrowIcon";
import { Link, Element } from "react-scroll";
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
    partialVisibilityGutter: 30,
  },
};
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide, totalItems },
  } = rest;
  return (
    <div className="flex justify-center">
      <button
        className={`${
          currentSlide === 0
            ? "disable cursor-not-allowed text-gray-500"
            : "transition ease-in-out transform duration-300 hover:bg-blue-450 hover:text-white"
        } flex border m-3 px-4 py-2 rounded-3xl bg-white`}
        onClick={() => previous()}
      >
        <div className="transform rotate-180">
          <ArrowIcon />
        </div>{" "}
        Prev
      </button>
      <button
        className={`${
          currentSlide === totalItems - 1
            ? "disable cursor-not-allowed text-gray-500"
            : "transition ease-in-out transform duration-300 hover:bg-blue-450 hover:text-white"
        } flex border m-3 px-4 py-2 rounded-3xl bg-white`}
        onClick={() => next()}
      >
        Next{" "}
        <p className="relative bottom-0.5">
          <ArrowIcon />
        </p>
      </button>
    </div>
  );
};

const HowWeWorkData = [
  {
    step: "1",
    img: "/images/work-step1.svg",
    content:
      "Brief (Context, Scope, Expectations, Payout) shared by Project Sponsor",
  },
  {
    step: "2",
    img: "/images/work-step2.svg",
    content: "Engagement Associate Aligns with the Sponsor",
  },
  {
    step: "3",
    img: "/images/work-step3.svg",
    content: "Talent is mobilized from the network",
  },
  {
    step: "4",
    img: "/images/work-step4.svg",
    content: "Profiles shared with the Project Sponsor",
  },
  {
    step: "5",
    img: "/images/work-step5.svg",
    content: "Transaction is formalized with the engagement Letter",
  },
  {
    step: "6",
    img: "/images/work-step6.svg",
    content: "Transaction is executed with oversight",
  },
];

const HowWeWork = () => {
  return (
    <Element name="thehow" className="md:my-12 my-8">
      <div className="md:w-1/2 w-full mx-auto">
        <p className="text-center md:text-4xl text-2xl md:underline">
          How We Work
        </p>
        <div className="md:my-12 my-4 md:w-1/2 w-full mx-auto pl-12">
          <Carousel
            responsive={responsive}
            customButtonGroup={<ButtonGroup />}
            arrows={false}
            renderButtonGroupOutside={true}
            partialVisbile={true}
          >
            {HowWeWorkData.map((data, index) => {
              return (
                <div key={index} className="text-center mr-4 md:h-auto h-full">
                  <p className="text-blue-450 md:text-2xl md:text-left text-center text-xl mb-3">
                    Step {data.step}
                  </p>
                  <div className="bg-blue-150 mx-auto p-12 md:h-auto h-full">
                    <div className="flex justify-around">
                      <img
                        src={data.img}
                        height="150px"
                        width="75px"
                        alt="Step 1"
                      />
                      <p className="my-auto text-left px-3">{data.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Element>
  );
};

export default HowWeWork;
