import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import { sliderSettings } from "../utils/common.js";
import "./SwiperButtons.css";
import PropertyCard from "./PropertyCard.jsx";
import useProperties from "./Hooks/useProperties.jsx";
import { PuffLoader } from "react-spinners";
const Carousel = () => {
  const { data, isError, isLoading } = useProperties();
  if (isError) {
    return (
      <div>
        <span>Oops... something went wrong!</span>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          aria-label="puff-loading"
          color={"#4066ff"}
        />
      </div>
    );
  }
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth">
        <div className="mb-4 flex flex-col items-center justify-center flex-wrap sm:items-start">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <hr className="w-90 h-[3px] bg-gradient-to-l from-gray-100 via-gray-400 to-neutral-900 mb-3" />
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {data.slice(0,8).map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card}/>
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
