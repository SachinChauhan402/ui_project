import React from "react";
import { ArrowIcon } from "../Icons/ArrowIcon";
import { useRouter } from "next/router";
import Carousel from "react-multi-carousel";
// import { ArrowIcon } from "../../Components/Icons/ArrowIcon";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 767 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 767, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide, totalItems },
  } = rest;
  return (
    <div className="flex justify-center md:hidden">
      <button
        className={`${
          currentSlide === 0
            ? "disable cursor-not-allowed text-gray-500"
            : "transition ease-in-out transform duration-300 hover:bg-blue-450 hover:text-white"
        } flex border m-1 px-2 py-2 rounded-full bg-white`}
        onClick={() => previous()}
      >
        <div className="transform rotate-180">
          <ArrowIcon className='mt-0'/>
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
        <p className="relative bottom-0.5">
        <ArrowIcon className='mt-0'/>
        </p>
      </button>
    </div>
  );
};

const Steps = () => {
  const router = useRouter();

  const navigate = () => {
    router.push("/about");
  };
  return (
    <div className=" max-w-4xl pt-12  mx-auto ">
      <div className="mx-8">
        <Carousel
          responsive={responsive}
          customButtonGroup={<ButtonGroup />}
          arrows={false}
          renderButtonGroupOutside={true}
          className="w-full"
        >
          <div className=" text-center mx-auto" style={{ width: "270px" }}>
            <div className="px-8 py-4  mx-auto">
              <img src="./images/step1.svg" className="my-2 mb-4 mx-auto" />
              <h2 className="font-medium text-xl my-2">Step 1</h2>

              <p className="my-2 text-sm">
                Brief (Context, Scope, Expectations, Payout) shared by Project
                Sponsor
              </p>
            </div>
          </div>
          <div className="  text-center mx-auto " style={{ width: "270px" }}>
            <div className="px-8 py-4 mx-auto  ">
              <img src="./images/step2.svg" className="my-2 mb-4 mx-auto" />
              <h2 className="font-medium text-xl my-2">Step 2</h2>

              <p className="my-2 text-sm">
                Best matched talent is mobilised from the network
              </p>
            </div>
          </div>

          <div className=" text-center mx-auto" style={{ width: "270px" }}>
            <div className="px-8 py-4 mx-auto ">
              <img src="./images/step3.svg" className="my-2 mb-4 mx-auto" />
              <h2 className="font-medium text-xl my-2">Step 3</h2>

              <p className="my-2 text-sm">
                Transaction is formalised with the Engagement Letter
              </p>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="flex my-12">
        <button
          onClick={navigate}
          className="font-light text-xl py-3 px-6 rounded mx-auto transition duration-500 ease-in-out transform bg-blue-700 hover:bg-blue-950 hover:text-white"
        >
          <span className="flex text-white">
            Learn More
            <ArrowIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Steps;
