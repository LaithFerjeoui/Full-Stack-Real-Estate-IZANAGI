import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../utils/slider.json";
import { sliderSettings } from "../utils/common.js";
import "./SwiperButtons.css";
const Carousel = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth">
        <div className="mb-4 flex flex-col items-center justify-center flex-wrap sm:items-start">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <hr className="w-90 h-[3px] bg-gradient-to-l from-gray-100 via-gray-400 to-neutral-900 mb-3"/>
        <Swiper {...sliderSettings}>
        <SlideNextButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card gap-2.5 p-2 shadow-xl  rounded-[10px] max-w-max m-auto transition duration-200 ease-in hover:cursor-pointer hover:scale-[1.025] ">
                <img src={card.image} alt="" className="w-[100%] max-w-60" />
                <span className="secondaryText text-sm font-semibold">
                  <span className="text-orange-400">$</span>
                  {card.price}
                </span>
                <span className="titleCard text-base ">{card.name}</span>
                <span className="secondaryText text-xs w-60">
                  {card.detail}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons justify-center mt-3">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
