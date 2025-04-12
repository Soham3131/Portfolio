import React from 'react';
import { motion } from 'framer-motion';
import rbt2 from './Images/rbt2.gif';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

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

const Projects = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background GIF */}
      <img
        src={rbt2}
        alt="project visual"
        className="absolute rounded-md top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Left-Aligned Text Overlay */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-start px-8 sm:px-16 lg:px-24 text-white text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="max-w-2xl">
          <motion.h1
            variants={lineVariants}
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-extrabold leading-tight"
          >
            PROJ
          </motion.h1>
          <motion.h1
            variants={lineVariants}
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-extrabold leading-tight -mt-6 ml-[85px]"
          >
            ECTS
          </motion.h1>

          <motion.p
            variants={lineVariants}
            className="text-lg sm:text-xl md:text-2xl mt-4 font-medium tracking-wider"
          >
            DIGITAL INNOVATION<br/>
            IMMERSIVE USER EXPERIENCES<br/>
            ELEVATING BRAND IDENTITIES
          </motion.p>

          <motion.button
            variants={lineVariants}
            className="mt-10 px-8 py-3 border-2 border-white rounded-full font-semibold text-sm sm:text-base hover:bg-white hover:text-black transition duration-300"
          >
            SHAPE THE FUTURE
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
