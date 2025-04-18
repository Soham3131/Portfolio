

import React from 'react';
import { motion } from 'framer-motion';

import walk from "./Images/walk.mp4"



const lineVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.95, rotateX: -30 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 12,
      mass: 0.6,
    },
  },
};


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const Design = () => {
  return (
    <div className='bg-white px-7 py-10 overflow-hidden'>
      <motion.div
        className='text-[3.5rem] sm:text-[7rem] md:text-[10rem] lg:text-[15rem] font-impact text-center tracking-[-0.03em]'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h1 variants={lineVariants}>IMPACTFUL</motion.h1>
        <motion.h1 variants={lineVariants}>DESIGN</motion.h1>
        <motion.h1 variants={lineVariants}>IS THE DESIGN</motion.h1>
        <motion.h1 variants={lineVariants}>THAT</motion.h1>
       
        <motion.video
  src={walk}
  autoPlay
  loop
  muted
  playsInline
  className="h-[7rem] sm:h-[12rem] md:h-[16rem] lg:h-[23rem] mx-auto object-contain mt-4"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  viewport={{ once: true }}
/>

      </motion.div>
    </div>
  );
};

export default Design;
