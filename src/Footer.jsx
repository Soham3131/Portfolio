import React from 'react';
import { motion } from 'framer-motion';
import half from './Images/half.gif';
import { Link } from 'react-router-dom';
import gsap from "gsap";
import Contact from './Contact';

const triggerClickEffect = (event) => {
  const rect = event.target.getBoundingClientRect();
  const numParticles = 15;

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.innerText = "✦";
    document.body.appendChild(particle);

    gsap.set(particle, {
      position: "absolute",
      top: rect.top + window.scrollY + rect.height / 2 + "px",
      left: rect.left + window.scrollX + rect.width / 2 + "px",
      fontSize: "1.5rem",
      color: "#ff9900",
      opacity: 1,
    });

    gsap.to(particle, {
      duration: 0.5,
      x: gsap.utils.random(-50, 50),
      y: gsap.utils.random(-50, 50),
      opacity: 0,
      scale: 0.5,
      ease: "power2.out",
      onComplete: () => particle.remove(),
    });
  }
};


// Animation Variants
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

const Footer = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden rounded-md">
      {/* Background GIF */}
      <img
        src={half}
        alt="footer background"
        className="absolute inset-0 w-full h-full object-cover z-0 rounded-md"
      />

      {/* Animated Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h1
          variants={lineVariants}
          className="text-white mt-[8rem] text-[3rem] md:text-[6rem] font-extrabold tracking-tight leading-tight"
        >
          STEP INTO THE FUTURE
        </motion.h1>

        <motion.div variants={lineVariants}>
  <Link to="/contact">
    
    <motion.button
  variants={lineVariants}
  onClick={(e) => {
    triggerClickEffect(e);
    setTimeout(() => {
      window.location.href = "/contact"; // 
    }, 300); 
  }}
  className="mt-10 px-10 py-4 bg-black border-4 border-white text-white text-lg font-semibold rounded-full hover:bg-white hover:text-black transition duration-300"
>
  CONTACT ME
</motion.button>

  </Link>
</motion.div>

        <motion.p
          variants={lineVariants}
          className="mt-14 text-white text-sm opacity-80"
        >
          © 2025 Soham.Dang®
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Footer;
