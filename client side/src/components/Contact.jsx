import React, { useState ,Fragment } from "react";
import { motion } from "framer-motion";
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import PrivacyPolicyDialog from "./PrivacyPolicy";
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
const Contact = () => {
  const [openPrivacyPolicyDialog, setOpenPrivacyPolicyDialog] = useState(false);

  const handlePrivacyPolicyClick = () => {
    setOpenPrivacyPolicyDialog(true);
  };
  const [isPolicyAgreed, setIsPolicyAgreed] = useState(false);

  const togglePolicy = () => {
    setIsPolicyAgreed(!isPolicyAgreed);
  };
  return (
    <section className="my-7">
      <div className="paddings innerWidth flex justify-center items-start gap-4 flex-wrap ">
        <div className="relative z-2 flex-1 flex flex-col justify-center items-center sm:items-start gap-2 mt-7">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us </span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you. We
            beleive a good blace to live can make your life better
          </span>
          <div class="isolate bg-white px-6   lg:px-8  mx-auto">
            <form
              action="#"
              method="POST"
              class="mx-auto mt-16 max-w-xl sm:mt-20"
            >
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    for="first-name"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="last-name"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="email"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autocomplete="email"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="phone-number"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div class="relative mt-2.5">
                    <div class="absolute inset-y-0 left-0 flex items-center">
                      <label for="country" class="sr-only">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      >
                        <option>+216</option>
                        <option>Other</option>
                      </select>
                      <svg
                        class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autocomplete="tel"
                      class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div class="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
                <div class="flex gap-x-4 sm:col-span-2">
                  <div class="flex h-6 items-center">
                    <button
                      type="button"
                      class={`bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                        isPolicyAgreed ? "bg-indigo-600" : ""
                      }`}
                      role="switch"
                      aria-checked={isPolicyAgreed}
                      aria-labelledby="switch-1-label"
                      onClick={togglePolicy}
                    >
                      <span class="sr-only">Agree to policies</span>

                      <span
                        aria-hidden="true"
                        class={`translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out ${
                          isPolicyAgreed ? "translate-x-full" : ""
                        }`}
                      ></span>
                    </button>
                  </div>
                  <label
                    class="text-sm leading-6 text-gray-600"
                    id="switch-1-label"
                  >
                    By selecting this, you agree to our{" "}
                    <span>
                      <a  class="font-semibold text-indigo-600 hover:cursor-pointer"  onClick={handlePrivacyPolicyClick}>
                        Privacy&nbsp;Policy
                      </a>
                    </span>
                    .
                  </label>
                </div>
              </div>
              <div class="mt-10">
                <button
                  type="submit"
                  class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's talk
                </button>
              </div>
            </form>
            <div
              class=" absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
              aria-hidden="true"
            >
              <div
                class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          variants={fadeIn("left", "tween", 0.2, 1)}
          className=" md:flex-1 flex justify-center sm:justify-end items-center my-auto relative z-4"
        >
          <img
            src="./contact.jpg"
            alt=""
            className="  w-[95%] h-[400px] sm:w-[480px] sm:h-[560px] overflow-hidden  rounded-t-full border-8 border-solid border-neutral-300 shadow-2xl"
          />
        </motion.div>
      </div>
      <PrivacyPolicyDialog
        open={openPrivacyPolicyDialog}
        onClose={() => setOpenPrivacyPolicyDialog(false)}
      />
    </section>
  );
};

export default Contact;
