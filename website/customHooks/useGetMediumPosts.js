import { useState } from "react";
import axios from "axios";

const useGetMediumPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const [videos, setVideos] = useState([]);

  const fetchMediumPosts = async () => {
    const POSTS_URL =
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@10xtd";
    await axios
      .get(POSTS_URL)
      .then((res) => {
        if (res.data.items) {
          setBlogs(res.data.items);
        }
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  };

  const fetchYoutubeVideos = async () => {
    const API_KEY = "AIzaSyDAInRjFaO2PLFHPU1pnjvXDytUB0ESdPA";
    const channelId = "UCjJ2NKWUlfWGv4pa3xd6pLQ";
    const URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;
    await axios
      .get(URL)
      .then((res) => {
        setVideos(res?.data?.items);
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  };

  return {
    blogs,
    videos,
    fetchMediumPosts,
    fetchYoutubeVideos,
  };
};

export default useGetMediumPosts;
