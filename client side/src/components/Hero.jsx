import React from "react";
import CountUp from "react-countup";
import { ImLocation2 } from "react-icons/im";

const Hero = () => {
  return (
    <section className="text-white pb-4 bg-[--black]">
      <div className="paddings innerWidth flexHero items-end">
        <div className="flexColStart ">
          <div className="relative z-1 ">
            <div className="h-16 w-16 bg-gradient-to-br from-orange-500 to-orange-300 absolute rounded-full right-[28%] top-[-10%] z-0" />
            <h1 className="font-semibold text-6xl flexCenter mb-11 relative z-1 inline-block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
              Discover <br /> Most Suitable <br /> Property
            </h1>
            <div className="flexColStart text-neutral-500 mb-11">
              <span>
                Find a variety of properties that suit you very easilty
              </span>
              <span>
                Forget all difficulties in finding a residence for you.
              </span>
            </div>
            <div className="bg-white rounded-md border-solid border-[3px] border-gray-400 justify-between px-2 py-1 flexNav mb-11">
              <ImLocation2 size={23} color="var(--blue)" />
              <input type="text" className="border-none outline-none text-black" />
              <button
                type="button"
                className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Search
              </button>
            </div>
          </div>
        <div className="w-[100%] justify-between flexNav">
          <div className="flexColCenter">
              <span className="text-3xl">
              <CountUp start={900} end={1100} duration={4}/>
              <span className="text-orange-400">+</span>
              </span>
              <span className="secondaryText">
                Premium Products
              </span>
          </div>
          <div className="flexColCenter">
          <span className="text-3xl">
              <CountUp start={500} end={700} duration={4}/>
              <span className="text-orange-400">+</span>
              </span>
              <span className="secondaryText">
              Happy Customer
              </span>
          </div>
          <div className="flexColCenter">
          <span className="text-3xl">
              <CountUp start={1} end={11} duration={4}/>
              <span className="text-orange-400">+</span>
              </span>
              <span className="secondaryText">
              Awards Winning
              </span>
          </div>
        </div>
        </div>
        <div className="flexCenter w-[480px] h-[560px] overflow-hidden  rounded-t-full border-8 border-solid border-neutral-800 ">
          <img src="./hero-image.png" alt="" className="w-[100%] h-[100%]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
