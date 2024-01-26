import React from 'react'

const Header = () => {
  return (
    <section className='bg-[--black] text-white'>
        <div className='flexNav paddings innerWidth justify-between'>
            <img src="./logo.png" width={100} alt="" />
            <div className=''>
                <a href="">Residencies</a>
                <a href="">Our Value</a>
                <a href="">Contact us</a>
                <a href="">Get Started</a>
                <button className='button'>
                    <a href="">Contact</a>
                </button>
            </div>
        </div>

    </section>
  )
}

export default Header