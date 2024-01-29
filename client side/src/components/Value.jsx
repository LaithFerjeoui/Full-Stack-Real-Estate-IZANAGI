import React from "react";
import { Disclosure } from "@headlessui/react";
import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import data from "../utils/accordion";
import { motion } from "framer-motion";
export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    oppacity: 0,
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    oppacity: 1,
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
const Value = () => {
  return (
    <section className="mt-4 md:ml-9">
      <div className="paddings innerWidth flex justify-center items-start gap-4 flex-wrap  v-container">
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("right", "tween", 0.2, 1)}
          className=" md:flex-1 flex justify-center sm:justify-start"
        >
          <img
            src="./value.png"
            alt=""
            className="  shadow-2xl w-[95%] h-[400px] sm:w-[480px] sm:h-[560px] overflow-hidden  rounded-t-full border-8 border-solid border-neutral-300"
          />
        </motion.div>
        <div className="flex flex-col justify-center items-center sm:items-start gap-1 flex-1 mt-9">
          <span className="orangeText"> Our Value</span>
          <span className="primaryText"> Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            <br />
            We beleive a good place to live can make your life better
          </span>

          <div className="max-w-xl sm:py-10 ">
            <div className="mx-auto max-w-md divide-y divide-gray-900/10">
              <dl className=" space-y-6 divide-y divide-gray-900/10">
                {data.map((item) => (
                  <Disclosure as="div" key={item.heading} className="pt-10">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <div className="flex items-center">
                              {item.icon && (
                                <span className="mr-2">{item.icon}</span>
                              )}
                              <span className="text-base font-semibold leading-7">
                                {item.heading}
                              </span>
                            </div>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-600 shadow-lg">
                            {item.detail}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
