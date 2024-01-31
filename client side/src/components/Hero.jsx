import React from "react";
import CountUp from "react-countup";
import { ImLocation2 } from "react-icons/im";
import { motion } from "framer-motion";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
      <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Discover <br />
              Most Suitable
              <br /> Property
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="bg-white w-[100%] rounded-md border-solid border-[3px] border-gray-400  px-2 py-1 flex justify-between items-center mb-11 ">
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

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
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
