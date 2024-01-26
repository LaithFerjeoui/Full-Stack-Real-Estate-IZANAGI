import React from 'react'

const Hero = () => {
  return (
    <section className='text-white relative pb-4 bg-[--black]'>
        <div className="paddings innerWidth flexNav justify-between items-end">
            <div className="hero-left">
                <div className="hero-title">
                    <h1 className='font-'>
                    Discover Most Suitable Property
                    </h1>
                </div>
            </div>
            <div className="flexCenter hero-right w-[480] h-[560px] overflow-hidden  rounded-t-full border-8 border-solid border-neutral-800">
                <img src="./hero-image.png" alt="" className='w-[100%] h-[100%]' />
            </div>
        </div>
    </section>
  )
}

export default Hero