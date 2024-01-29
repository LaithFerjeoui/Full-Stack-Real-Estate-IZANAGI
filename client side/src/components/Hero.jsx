import React from "react";
import CountUp from "react-countup";
import { ImLocation2 } from "react-icons/im";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="text-white pb-4 bg-[--black] pt-8 sm:pt-0 ">
      <div className="paddings  innerWidth flexHero ">
        <div className="flexColStart ">
          <div className="relative z-1 ">
            <div className="h-16 w-16 bg-gradient-to-br from-orange-500 to-orange-300 absolute rounded-full right-[28%] top-[-10%] z-0" />
            <motion.h1 
            initial={{ opacity: 0, y: -9 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 , type:"spring"}}
            className="font-semibold text-5xl sm:text-6xl flexStart mb-11 relative z-1 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
            <div className="flexColStart text-neutral-500 mb-11">
              <span>
                Find a variety of properties that suit you very easilty
              </span>
              <span>
                Forget all difficulties in finding a residence for you.
              </span>
            </div>
            <div className="bg-white rounded-md border-solid border-[3px] border-gray-400  px-2 py-1 flex justify-between items-center mb-11 ">
              <ImLocation2 size={23} color="var(--blue)" />
              <input
                type="text"
                className="border-none outline-none text-black"
              />
              <button
                type="button"
                className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Search
              </button>
            </div>
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
        initial={{x:"7rem" ,opacity: 0 }}
        animate={{x:0,opacity:1}}
        transition={{duration:2, type:"spring"}}
         className="flexCenter w-[95%] h-[400px] sm:w-[480px] sm:h-[560px] overflow-hidden  rounded-t-full border-8 border-solid border-neutral-800 ">
          <img src="./hero-image.png" alt="" className="w-[100%] h-[100%] " />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
