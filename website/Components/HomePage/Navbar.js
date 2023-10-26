import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDownIcon } from "../Icons/ArrowDownIcon";
import Link from "next/link";

const Heading = ({ menu, setMenu }) => {
  return (
    <div className="flex flex-wrap">
      <div className="cursor-pointer flex justify-between sm:w-auto w-full">
        <Link href="/">
          <img
            src="/images/Logo.png"
            alt="10XTD"
            className="md:mx-0 logoImage md:w-40 w-32"
          />
        </Link>
        <div className="md:hidden block font-medium flex items-center">
          <button
            className={`mr-2 shadow rounded-full p-3 ${menu && "py-5"}`}
            onClick={() => setMenu(!menu)}
          >
            <div
              className={`bar1 w-5 h-0.5  ${
                menu ? "transform rotate-45 bg-blue-700" : "mb-1 bg-gray-500"
              }`}
            ></div>
            <div
              className={`bar1 w-5 h-0.5  ${
                menu
                  ? "transform -rotate-45 -translate-y-0.5 bg-blue-700"
                  : "mb-1 bg-gray-500"
              }`}
            ></div>
            {!menu && <div className={"bar1 w-5 h-0.5 bg-gray-500"}></div>}
          </button>
          <div
            className={`${menu ? "text-blue-700" : "text-gray-500"} text-lg`}
          >
            MENU
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center md:text-xl md:text-lg text-sm">
        <p className="sm:font-normal font-semibold md:text-xl md:text-lg text-sm">
          Digital on Demand Platform for Growth
        </p>
        <p className="md:text-sm text-xs text-gray-400">
          Network of CXOs, Entrepreneurs, Experts, Talent
        </p>
      </div>
    </div>
  );
};

const Navbar = ({ page, getNavHeight }) => {
  const [showGlobal, setShowGlobal] = useState(false);
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleShow = () => {
    setShow(!show);
    if (showGlobal) {
      setShowGlobal(false);
    }
  };

  const handleShowGlobal = () => {
    setShowGlobal(!showGlobal);
    if (show) {
      setShow(false);
    }
  };

  const ref = useRef();

  useEffect(() => {
    if (ref?.current && getNavHeight) {
      getNavHeight(ref.current.clientHeight);
    }
  }, [ref?.current]);

  return (
    <div
      className="fixed w-full bg-white top-0 bg-white z-50 md:border-2 border-solid border-gray-300  shadow-lg text-xl md:px-0 md:py-0 px-5 py-2"
      ref={ref}
    >
      <div className="flex justify-between">
        <Heading menu={menu} setMenu={setMenu} />
        <div className="md:flex flex-col justify-center pr-4 hidden">
          <div className="flex justify-between text-base">
            <div
              className={`flex flex-col hover:text-blue-900 transition duration-200 ${
                page === "about" && "text-blue-600"
              }`}
            >
              <Link
                href="/about"
                className={`mx-3 ${page === "about" && "relative top-1"}`}
              >
                About 10XTD
              </Link>
              {page === "about" && (
                <hr className="p-0.5 border-b-2 border-blue-600 bg-blue-600 top-4 w-32 relative" />
              )}
            </div>
            <button
              onMouseEnter={handleShowGlobal}
              className={`flex mx-3 hover:text-blue-900 transition duration-200 hover:underline `}
            >
              Global Partner Program
              <span
                className={`transform duration-500 ${
                  showGlobal ? "rotate-180" : ""
                }`}
              >
                <ArrowDownIcon />
              </span>
            </button>
            {showGlobal && (
              <div
                onMouseLeave={handleShowGlobal}
                className="absolute top-16 right-72"
              >
                <div className="flex flex-col bg-white text-left w-52">
                  <a
                    href="http://localhost:3000/cxos"
                    className="hover:text-blue-500 font-medium py-2 w-full py-2 text-left mx-2 text-blue-450 "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Global Partner Program for CXOs
                  </a>
                  <hr />
                  <a
                    href="http://localhost:3000/teams"
                    className="hover:text-blue-500 font-medium py-2 w-full py-2 text-left mx-2 text-blue-450 "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Global Partner Program for Partner Teams <br />
                    <span style={{ flex: 1 }}>& Independent Experts</span>
                  </a>
                </div>
              </div>
            )}
            <button
              onMouseEnter={handleShow}
              className={`flex mx-3 hover:text-blue-900 transition duration-200 hover:underline `}
            >
              Insights{" "}
              <span
                className={`transform duration-500 ${show ? "rotate-180" : ""}`}
              >
                <ArrowDownIcon />
              </span>
            </button>
            {show && (
              <div
                onMouseLeave={handleShow}
                className="absolute top-16 right-44"
              >
                <div className="flex flex-col bg-white text-left w-48">
                  <Link href="/#videos" scroll={false}>
                    <button className="text-blue-450 font-medium py-2 w-full py-2 text-left mx-2">
                      Videos
                    </button>
                  </Link>
                  <hr />
                  <Link href="/#blogs" scroll={false}>
                    <button className="text-blue-450 font-medium py-2 w-full py-2 text-left mx-2">
                      Blogs
                    </button>
                  </Link>
                </div>
              </div>
            )}
            <p>|</p>
            <div className="flex mx-3">
              <a href="#footer">
                <p className="mx-2 hover:text-blue-900">Contact Us</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      {menu && (
        <div className="topnav mt-4 text-gray-400 text-sm md:hidden">
          <ul>
            <li className="border-b py-2">
              <Link
                href="/about"
                className={`mx-3 ${page === "about" && "relative top-1"}`}
              >
                About 10XTD
              </Link>
            </li>
            <li className="border-b py-2">
              {" "}
              <a
                href="http://localhost:3000/cxos"
                className="font-medium py-2 w-full py-2 text-left"
                target="_blank"
                rel="noreferrer"
              >
                Global Partner Program for CXOs
              </a>
            </li>
            <li className="border-b py-2">
              {" "}
              <a
                href="http://localhost:3000/teams"
                className="font-medium py-2 w-full py-2 text-left"
                target="_blank"
                rel="noreferrer"
              >
                Global Partner Program for Partner Teams <br />
                <span style={{ flex: 1 }}>& Independent Experts</span>
              </a>
            </li>
            <li className="border-b py-2">
              {" "}
              <Link href="/#blogs" scroll={false}>
                <button className="font-medium py-2 w-full py-2 text-left">
                  Insights - Blog
                </button>
              </Link>{" "}
            </li>
            <li className="border-b py-2">
              {" "}
              <Link href="/#videos" scroll={false}>
                <button className="font-medium py-2 w-full py-2 text-left">
                  Insights - Videos
                </button>
              </Link>
            </li>
            <li className="py-2 border-b mb-2 -ml-2">
              <a href="#footer">
                <p className="mx-2 hover:text-blue-900">Contact Us</p>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

Navbar.defaultProps = {
  page: "",
};

export default Navbar;
