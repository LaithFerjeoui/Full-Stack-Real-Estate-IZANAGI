import React from 'react'
import Carousel from "../components/Carousel";
import Companies from "../components/Companies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Value from "../components/Value";
const Website = () => {
  return (
    <div className="app relative overflow-clip">
    <div className='bg-[--black]'>
      <Header />
      <div className="white-gradient " />
      <Hero />
    </div>
    <Companies />
    <Carousel />
    <Value />
    <Contact />
    <Footer />
  </div>
  )
}

export default Website