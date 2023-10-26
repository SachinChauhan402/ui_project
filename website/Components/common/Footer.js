import React from "react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <footer
      id="footer"
      className="footer bg-blue-450 text-white relative pt-1 border-b-2 "
    >
      <div className="container mx-auto px-6">
        <div className="md:flex md:mt-8">
          <div className="mt-8 md:mt-0 md:w-full md:px-8 flex flex-row justify-between mx-auto max-w-6xl">
            <div className="flex flex-wrap md:w-2/3 w-1/2">
              <div className="flex flex-col md:w-1/2 w-full">
                <span className="text-2xl text-white  mb-2">Company</span>
                <span className="my-2">
                  <Link href="/about">
                    <a className="text-white text-md hover:text-blue-500">
                      About 10XTD
                    </a>
                  </Link>
                  <br />
                </span>

                <span className="my-2">
                  <Link href="/faq">
                    <a className="text-white  text-md hover:text-blue-500">
                      FAQs
                    </a>
                  </Link>
                </span>
              </div>
              <div className="flex flex-col md:w-1/2 w-full">
                <span className="text-2xl text-white  mb-2">Insights</span>
                <span className="my-2">
                  <Link href="/#videos">
                    <a className=" text-md hover:text-blue-500">Videos</a>
                  </Link>
                </span>
                <span className="my-2">
                  <Link href="/#blogs">
                    <a className="  text-md hover:text-blue-500"> Blog</a>
                  </Link>
                </span>
              </div>
            </div>

            <div className="md:w-1/3 w-1/2">
              <span className="text-2xl text-white  mb-2">Contact Us</span>
              <div className="flex flex-col">
                <div className="flex md:flex-row flex-col flex-wrap my-2">
                  <div className=" pr-11 md:border-b xl:border-b-0 xl:border-r border-b md:pb-0 pb-2">
                    <p className="text-md  hover:text-blue-500">Whatsapp:</p>
                    <p className="font-semibold md:mb-1 whitespace-nowrap">
                      +91 98671 95449
                    </p>
                  </div>

                  <p className="absolute w-44 xl:w-1/3 xl:mt-20 mt-36 md:mt-32 text-xs lg:text-sm">
                    Onboard 10XTD Network (for Talent Persona):
                    <a
                      className="ml-2 hover:text-blue-500"
                      href="mailto:curation@10XTD.in"
                    >
                      curation@10XTD.in
                    </a>
                  </p>
                  <p className="absolute w-44  mt-48 xl:w-1/3 xl:mt-28 md:mt-44 text-xs lg:text-sm ">
                    Apply for Active Opportunities (for Talent Persona):
                    <a
                      className="ml-2 mt-8 hover:text-blue-500"
                      href="mailto:frontoffice@10XTD.in"
                    >
                      frontoffice@10XTD.in
                    </a>
                  </p>
                  <p className="absolute mt-60 xl:w-1/3 w-44 md:mt-56 xl:mt-36 text-xs lg:text-sm">
                    Join 10XTD Partner Program (for Partner Teams, Independent
                    Experts, CXOs):
                    <a
                      className="ml-2 hover:text-blue-500"
                      href="mailto:partner@10XTD.in"
                    >
                      <span className="-mt-3">partner@10XTD.in</span>
                    </a>
                  </p>

                  <span className="md:pl-11 md:border-b-0 pr-11 md:pr-0 border-b xl:ml-44 xl:-mt-14 md:-ml-11 md:mt-2 md:py-0 py-2">
                    <p className="  text-md hover:text-blue-500">Follow Us:</p>
                    <div className="flex">
                      <a
                        href="https://medium.com/10xtd"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="/images/blog_icon.svg"
                          alt="blog"
                          className="mr-2 cursor-pointer"
                        />
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCjJ2NKWUlfWGv4pa3xd6pLQ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="/images/youtube_icon.svg"
                          alt="blog"
                          className="mx-2 cursor-pointer"
                        />
                      </a>
                      <a
                        href="https://in.linkedin.com/company/10xtd"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="/images/linkedin_icon.svg"
                          alt="blog"
                          className="mx-2 cursor-pointer"
                        />
                      </a>
                    </div>
                  </span>
                </div>
                <span className="mt-44"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mt-1 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="md:w-2/3 text-center py-6"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
