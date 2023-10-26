import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import useGetMediumPosts from "../../customHooks/useGetMediumPosts";
import { ArrowIcon } from "../Icons/ArrowIcon";
import { useRouter } from "next/router";
import { ArrowDownIcon } from "../Icons/ArrowDownIcon";
import "react-multi-carousel/lib/styles.css";

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
    partialVisibilityGutter: 80,
  },
};

const Insight = () => {
  const router = useRouter();
  const { videos, blogs, fetchMediumPosts, fetchYoutubeVideos } =
    useGetMediumPosts();
  const [hover, setHover] = useState(-1);
  const [hoverVideo, setHoverVideo] = useState(-1);

  useEffect(() => {
    fetchMediumPosts();
    fetchYoutubeVideos();
  }, []);

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide, totalItems },
    } = rest;
    return (
      <div className="md:flex justify-between  hidden">
        <button
          className={`${
            currentSlide === 0
              ? "disable cursor-not-allowed text-gray-500"
              : "transition ease-in-out transform duration-300 hover:bg-gray-400 hover:text-white"
          } flex border m-3 px-4 py-3 rounded-full bg-gray-900 bg-opacity-60 -ml-24 relative -top-56 `}
          onClick={() => previous()}
        >
          <div className="py-1 text-2xl text-white transform rotate-90">
            <ArrowDownIcon />
          </div>
        </button>
        <button
          className={`${
            currentSlide === totalItems - 1
              ? "disable cursor-not-allowed text-gray-500"
              : "transition ease-in-out transform duration-300 hover:bg-gray-400 hover:text-white"
          } flex border m-3 px-4 py-3 rounded-full bg-gray-900 bg-opacity-60 -mr-24 relative -top-56`}
          onClick={() => next()}
        >
          <p className="py-1 text-2xl text-white transform -rotate-90">
            <ArrowDownIcon />
          </p>
        </button>
      </div>
    );
  };

  return (
    <div className="bg-gray-200">
      <div className="md:w-6/12 mx-auto ">
        <p className="sm:text-4xl sm:font-small px-4 text-xl font-medium text-center sm:py-12 py-6">
          Insights from 10xtd network
        </p>
        <div id="blogs">
          <p className="sm:mb-11 mb-2 px-5 sm:text-black text-blue-700 sm:text-2xl text-xl">
            Blogs
          </p>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            customButtonGroup={<ButtonGroup />}
            arrows={false}
            renderButtonGroupOutside={true}
            partialVisible={true}
          >
            {blogs?.map((blog, index) => {
              return (
                <div
                  key={index}
                  className="mx-3 cursor-pointer transition duration-100 hover:bg-blue-450 p-2 hover:text-white"
                  onClick={() => handleClick(blog.link)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(-1)}
                >
                  <img
                    src={blog.thumbnail}
                    width="100%"
                    height={200}
                    // className="h-48"
                    style={{ height: 200 }}
                  />
                  <p
                    className={`capitalize ${
                      hover === index ? "text-white" : "text-gray-500"
                    } mt-8 text-sm`}
                  >
                    {blog.categories[0]}
                  </p>
                  <hr
                    className={`p-1 ${
                      hover === index ? "bg-white" : "bg-blue-700"
                    } w-14 mt-2 mb-4`}
                  />
                  <p className="h-20">{blog.title}</p>
                  <p
                    className={`text-xs ${
                      hover === index ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {blog.author}
                  </p>
                </div>
              );
            })}
          </Carousel>
          <a
            href="https://medium.com/10xtd"
            target="_blank"
            className="flex py-11 px-5"
            rel="noreferrer"
          >
            Read More Articles <ArrowIcon />
          </a>
        </div>
        <hr className="bg-gray-800 border-b border-black border-gray-400" />
        {videos && videos.length ? (
          <div id="videos">
            <p className="sm:text-2xl text-xl sm:mb-11 mb-2 mt-11 px-5 sm:text-black text-blue-700">
              Videos
            </p>
            <Carousel
              responsive={responsive}
              infinite
              arrows={false}
              customButtonGroup={<ButtonGroup />}
              renderButtonGroupOutside={true}
              removeArrowOnDeviceType={["superLargeDesktop", "desktop"]}
              partialVisible={true}
            >
              {videos?.map((video, index) => {
                return (
                  <div
                    key={index}
                    className="mx-3 cursor-pointer transition duration-100 hover:bg-blue-450 px-2 pb-2 pt-0 hover:text-white"
                    onMouseEnter={() => setHoverVideo(index)}
                    onMouseLeave={() => setHoverVideo(-1)}
                  >
                    <iframe
                      width="100%"
                      height="150px"
                      src={`https://www.youtube.com/embed/${video.id.videoId}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <p
                      className={`capitalize ${
                        hoverVideo === index ? "text-white" : "text-gray-500"
                      } mt-8 text-sm h-14`}
                    >
                      {video.snippet.title}
                    </p>
                    <hr
                      className={`p-1 ${
                        hoverVideo === index ? "bg-whtie" : "bg-blue-700"
                      } w-14 mt-2 mb-4`}
                    />
                    <p className="mb-4">{video.snippet.title.split("|")[0]}</p>
                    <p className="text-xs">{video.snippet.description}</p>
                  </div>
                );
              })}
            </Carousel>
            <a
              href="https://www.youtube.com/channel/UCjJ2NKWUlfWGv4pa3xd6pLQ"
              target="_blank"
              className="flex py-11 px-5"
              rel="noreferrer"
            >
              Watch More Videos <ArrowIcon />{" "}
            </a>
          </div>
        ) : (
          <div id="videos"></div>
        )}
      </div>
    </div>
  );
};

export default Insight;
