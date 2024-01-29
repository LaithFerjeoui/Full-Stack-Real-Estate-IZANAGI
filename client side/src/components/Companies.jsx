import React from 'react';
import { motion } from 'framer-motion';
const companies = [
  {
    image: "./prologis.png"
  },
  {
    image: "./tower.png"
  },
  {
    image: "./equinix.png"
  },
  {
    image: "./realty.png"
  }
];

const Companies = () => {
  return (
    <section className='c-wrapper paddings innerWidth flex items-center justify-around flex-wrap gap-2'>
      {companies.map((company, index) => (
        <motion.div
         key={index}
         initial={{opacity:0 , x: -50}}
         animate={{ opacity:1, x:0 }}
         transition={{duration:1 ,type:"spring", delay: index*0.4}}
         >
          <img src={company.image} alt="" className='w-36' />
        </motion.div>
      ))}
    </section>
  );
};

export default Companies;
