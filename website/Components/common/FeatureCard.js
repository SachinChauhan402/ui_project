import React from "react";

const FeatureCard = ({ item }) => {
  return (
    <div className=" sm:bg-gray-200 sm:shadow-none shadow-lg h-80 text-left  transition duration-500 ease-in-out transform bg-white hover:bg-blue-900 hover:text-white">
      <div className="px-8 py-4  ">
        <div className='mx-auto'style={{maxWidth:'220px'}}>
          <img src={item.image} className="my-2 mb-4" />
          <h2 className="font-medium text-xl my-2">{item.title}</h2>

          <p className="my-2 text-sm">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
