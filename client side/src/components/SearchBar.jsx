import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
const SearchBar = () => {
  return (
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
  )
}

export default SearchBar