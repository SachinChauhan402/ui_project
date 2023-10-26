import React from "react";
import { ArrowIcon } from "../Icons/ArrowIcon";
import { useRouter } from "next/router";

const Content = ({}) => {
  const router = useRouter();

  const navigate = () => {
    router.push("/about")
  }
  return (
    <div className='md:mt-16 mt-25'>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center bg-indigo-500 pt-4">
          <div className="mx-auto text-center md:text-5xl text-sm">
            <p className="text-gray-300">
              We mobilise talent <br /> from around the world,
            </p>
            <p className="text-white font-semibold">on demand.</p>
            <button onClick={navigate} className="rounded font-light md:text-xl text-sm py-3 sm:px-6 sm:m-4 transition duration-500 ease-in-out transform sm:bg-white sm:text-black text-white hover:bg-blue-950 hover:text-white">
              <span className="flex justify-center">
                <p>Learn More</p>
                <ArrowIcon className='mt-0 ml-3'/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src="/images/content_image.jpeg"
            alt="10XTD"
            height="705px"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
