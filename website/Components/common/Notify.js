import React from "react";
import { CloseIcon } from "../Icons/CloseIcon";

const Notify = ({ color, message, show, hideShow }) => {
  return (
    <div>
      {show && (
        <div
          className={`bg-${color}-500 bg-opacity-80 fixed top-10 right-10 rounded-lg shadow-2xl text-2xl`}
        >
          <div className="flex justify-end p-1">
            <button
              onClick={hideShow}
              className="bg-blue-300 rounded-full p-1 transition duration-300 transform hover:-translate-y-1 hover:scale:110"
            >
              <CloseIcon />
            </button>
          </div>
            <p className="pt-0 px-6 pb-4 text-white">{message}</p>
        </div>
      )}
    </div>
  );
};

Notify.defaultProps = {
  color: "blue",
};

export default Notify;
