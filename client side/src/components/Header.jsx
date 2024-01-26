import React from 'react'

const Header = () => {
  return (
    <section className='bg-[--black] text-white'>
        <div className='flexNav paddings innerWidth py-4 text-[--secondary]'>
            <img src="./logo.png" width={100} alt="" />
            <div className='flexCenter gap-8 hover:cursor-pointer'>
                <a href="">Residencies</a>
                <a href="">Our Value</a>
                <a href="">Contact us</a>
                <a href="">Get Started</a>
                <button
        type="button"
        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Contact
      </button>
            </div>
        </div>

    </section>
  )
}

export default Header