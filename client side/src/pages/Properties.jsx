import React from 'react'
import SearchBar from '../components/SearchBar'
import { HiLocationMarker } from 'react-icons/hi'

const Properties = () => {
  return (
    <div>
        <div className="flexColCenter paddings innerWidth gap-8 ">
          <div className='w-[100%] min-w-40 max-w-[448px] rounded-xl'>
          <form>
              
              <div class="relative">
              <HiLocationMarker  color="var(--blue)" size={25} className="absolute start-2.5 top-3 "/>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-400 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search by Location"
                  required
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
          

        </div>
        
    </div>
  )
}

export default Properties