import React, { useContext, useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import useProperties from "../components/Hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../components/PropertyCard";
import UserDetailContext from "../components/context/UserDetailContext";
import { motion } from "framer-motion";
const Bookings = () => {
  const [filter, setFilter] = useState("");
  const {
    userDetails: { bookings },
  } = useContext(UserDetailContext);
  const { data, isError, isLoading } = useProperties();
  if (isError) {
    return (
      <div>
        <span className="flex justify-center">
          Oops... something went wrong!
        </span>
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
    <div>
      <div className="flexColCenter paddings innerWidth gap-8 ">
      <motion.h1 className="mt-5 shadow-xl leading-7 font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-800"
      initial={{ opacity: 0, y: -9 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: "easeIn" }}>My Bookings</motion.h1>
        <div className="w-[100%] min-w-40 max-w-[448px] rounded-xl">
          <form>
            <div class="relative">
              <HiLocationMarker
                color="var(--blue)"
                size={25}
                className="absolute start-2.5 top-3 "
              />
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-400 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by Name/City/Country"
                required
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
              />
              <button
                type="button"
                className="absolute end-2.5 bottom-2.5 rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="paddings flex justify-center items-center flex-wrap">
          {data
            .filter((property) =>
            bookings && Array.isArray(bookings) && bookings.map((booking) => booking.id).includes(property.id)
            
            )
            .filter(
              (property) =>
                property.title.toLowerCase().includes(filter.toLowerCase()) ||
                property.city.toLowerCase().includes(filter.toLowerCase()) ||
                property.country.toLowerCase().includes(filter.toLowerCase())
            )
            .map((card, i) => (
              <PropertyCard card={card} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
