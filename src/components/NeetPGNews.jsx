import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const newsData = [
  {
    link: "https://zeenews.india.com/india/neet-pg-2023-result-released-at-nbe-edu-in-direct-link-steps-to-check-scorecard-cut-off-here-2583609.html",
    image:
      "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/03/14/1167393-neet-pg-result.jpg",
    caption: "NEET PG 2023 Result RELEASED",
  },
  {
    link: "https://www.indiatoday.in/education-today/news/story/neet-pg-2023-result-20-candidates-score-over-700-this-year-vs-only-1-last-year-result-and-cut-off-comparison-2347574-2023-03-16",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/national-cancer-institute-nfvdkihxylu-unsplash-sixteen_nine.jpg",
    caption:
      "NEET PG 2023 Result: 20 candidates score over 700 this year vs only 1 last year",
  },
  {
    link: "https://bestcolleges.indiatoday.in/news-detail/neet-pg-2025-round-3-registration-and-choice-locking-closed-seat-allotment-on-january-21",
    image:
      "https://static-bestcolleges.tosshub.com/2025/News/AVTt807nIbc9S8E87EZmEmcvjTaKkGAKK9eiiFQA.png",
    caption:
      "NEET PG 2025 Round 3: Registration and choice-locking closed, seat allotment on January 21",
  },
  {
    link: "https://www.livemint.com/news/india/neetpg-2023-results-announced-today-here-s-how-to-check-11678800203746.html",
    image:
      "https://images.livemint.com/img/2023/03/14/600x338/f138b17e-2f8c-11ed-b360-96b459ca4506_1665392792935_1665392792935_1678800358915_1678800358915.jpg",
    caption: "NEET-PG 2023 results announced today. Here's how to check:",
  },
];

export const NEETPGNews = () => {
  return (
    <div className="relative w-full h-auto bg-blue-950 flex flex-col justify-center items-center overflow-hidden">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">NEET PG News</h2>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-[170px]"
      >
        {newsData.map((news, index) => (
          <SwiperSlide key={index}>
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="group bg-white/10 backdrop-blur-sm border border-black/20 p-4 flex items-center hover:shadow-lg hover:scale-105 transition-all h-[80%] overflow-hidden">
                <img
                  src={news.image}
                  alt={`Slide ${index + 1}`}
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
    </div>
  );
};

export default NEETPGNews;
