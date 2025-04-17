import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useUser } from "./context/sessionContext";

export const NEETPGNews = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { isLoggedIn } = useUser();

  // Fetch News from Database
  useEffect(() => {
    const fetchNews = async () => {
      if (!isLoggedIn) {
        //No session, use dummy data
        setNewsList(dummyNews);
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(
          "http://localhost:3001/api/user/getAllNews",{withCredentials:true}
        );

        if (response.data) {
          // 🔹 Filter news related to "NEET PG"
          // const filteredNews = response.data.news.filter(
          //   (news) => news.category && news.category.toLowerCase() === "neet ug"
          // );
         console.log("this is the response",response.data.data)
          setNewsList(response.data.data);
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

const dummyNews = [
  {
    _id: "dummy1",
    caption: "Bangladesh Demands USD 4.32 Billion Compensation From Pakistan Along With 'Public Apology' For 1971 Atrocities",
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1D7AKN.img?w=768&h=432&m=6&x=152&y=223&s=800&d=143",
    link: "https://www.msn.com/en-in/news/world/bangladesh-demands-usd-4-32-billion-compensation-from-pakistan-along-with-public-apology-for-1971-atrocities/ar-AA1D7FfM?ocid=BingNewsSerp",

  },
  {
    _id: "dummy2",
    caption: "Did not attack Indian pharma warehouse': Russian embassy blames Ukraine",
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1D7pxK.img?w=400&h=225&m=6",
    link: "https://www.msn.com/en-in/news/world/did-not-attack-indian-pharma-warehouse-russian-embassy-blames-ukraine/ar-AA1D7rvq?ocid=BingNewsSerp",

  },
  {
    _id: "dummy3",
    caption: "FSU shooting live updates: Phoenix Ikner identified as shooter who killed 2 and injured 5",
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1D7IxC.img?w=550&h=309&m=6",
    link: "https://www.msn.com/en-in/news/world/fsu-shooting-live-updates-heavy-police-deployment-on-campus-security-alert-issued/ar-AA1D7QPl?ocid=BingNewsSerp",
    
  }
];
