import React from "react";
import CountUp from "react-countup";
import { HiLocationMarker } from "react-icons/hi";
import "./Hero.css";
import { motion } from "framer-motion";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="text-white pb-4 pt-8 sm:pt-0 ">
      <div className="paddings innerWidth flexHero ">
        <div className="flexColStart gap-12">
          <div className="relative z-0 ">
            <div className="h-16 w-16 bg-gradient-to-br from-orange-500 to-orange-300 absolute rounded-full right-[28%] top-[-10%] z-1" />
            <motion.h1
              initial={{ opacity: 0, y: -9 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, type: "spring" }}
              className="font-semibold text-5xl sm:text-6xl  mb-11  text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"
            >
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
            <div className="flexColStart secondaryText mb-11">
              <span>
                Find a variety of properties that suit you very easilty
              </span>
              <span>
                Forget all difficulties in finding a residence for you.
              </span>
            </div>

            <form>
              
              <div class="relative">
              <HiLocationMarker  color="var(--blue)" size={25} className="absolute start-2.5 top-3 "/>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search by Location"
                  required
                />
                <button
                type="button"
                className="absolute end-2.5 bottom-2.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Search
              </button>
              </div>
            </form>
          </div>
          <div className="w-[100%] flex justify-center items-center gap-3 flex-wrap">
            <div className="flexColCenter">
              <span className="text-2xl sm:text-4xl">
                <CountUp start={900} end={1100} duration={4} />
                <span className="text-orange-400">+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter">
              <span className="text-2xl sm:text-4xl">
                <CountUp start={500} end={700} duration={4} />
                <span className="text-orange-400">+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColCenter">
              <span className="text-2xl sm:text-4xl">
                <CountUp start={1} end={11} duration={4} />
                <span className="text-orange-400">+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
          className="flexCenter w-[95%] h-[400px] sm:w-[480px] sm:h-[560px] overflow-hidden  rounded-t-full border-8 border-solid border-neutral-800 "
        >
          <img src="./hero-image.png" alt="" className="w-[100%] h-[100%] " />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
