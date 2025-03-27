import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const NEETPGNews = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Fetch News from Database
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/admin/news/all",{withCredentials:true}
        );

        if (response.data && response.data.news) {
          // 🔹 Filter news related to "NEET PG"
          // const filteredNews = response.data.news.filter(
          //   (news) => news.category && news.category.toLowerCase() === "neet ug"
          // );

          setNewsList(response.data.news);
        } else {
          setError("Invalid API response format.");
        }

        setLoading(false);
      } catch (err) {
        setError("Failed to load news. Please try again later.");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="relative w-full h-auto bg-blue-950 flex flex-col justify-center items-center overflow-hidden">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">Latest NEET News</h2>

      {loading ? (
        <p className="text-white">Loading news...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : newsList.length === 0 ? (
        <p className="text-gray-400">No NEET PG news available.</p>
      ) : (
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-[170px]"
        >
          {newsList.map((news) => (
            <SwiperSlide key={news._id}>
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="group bg-white/10 backdrop-blur-sm border border-black/20 p-4 flex items-center hover:shadow-lg hover:scale-105 transition-all h-[80%] overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.caption}
                    className="w-[250px] h-[120px] object-cover"
                  />
                  <p className="text-yellow-400 text-base font-semibold group-hover:text-yellow-400 ml-4 truncate">
                    {news.caption}
                  </p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
