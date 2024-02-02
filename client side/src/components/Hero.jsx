import  { React }  from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

const Hero = () => {
  
  return (
    <section className="text-white pb-4 pt-8 sm:pt-0 relative z-0 ">
      <div className="paddings innerWidth flexHero ">
        <div className="flexColStart gap-12">
          <div className="relative z-1 ">
            <div className="h-16 w-16 bg-gradient-to-br from-orange-500 to-orange-300 absolute z-0 rounded-full right-[28%] top-[-10%] " />
            <motion.h1
              initial={{ opacity: 0, y: -9 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, type: "easeIn" }}
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

            <SearchBar/>
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
