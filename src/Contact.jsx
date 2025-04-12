import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail, FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import astro from "./Images/astro.gif";
import gsap from "gsap";

// Sparkle effect on click
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

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="relative w-full h-screen overflow-hidden flex items-center justify-center p-7"
      style={{
        backgroundImage: `url(${astro})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Menu Toggle Button */}
      <button
        className="absolute top-8 left-8 z-50 text-white text-[35px] bg-black bg-opacity-50 p-2 rounded-md"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX className="hover:opacity-80" /> : <FiMenu className="hover:opacity-80" />}
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-90 text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 p-6`}
      >
        <nav className="flex flex-col mt-[65px] space-y-6">
          <Link to="/" className="hover:text-gray-400 text-lg" onClick={triggerClickEffect}>
            Home
          </Link>
          <Link to="/contact" className="hover:text-gray-400 text-lg" onClick={triggerClickEffect}>
            Contact Me
          </Link>
        </nav>
      </div>

      {/* Overlay and Content */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10 rounded-md" />

      <div className="relative z-20 text-white right-[19rem] max-w-4xl mx-auto space-y-6">
        <button className="bg-white flex text-black px-6 py-3 rounded-full font-semibold text-md shadow-md hover:scale-105 transition-all gap-5 items-center">
          Contact Me!
          <div className="bg-purple-400 w-5 h-5 rounded-full"></div>
        </button>

        <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
          Outer Space The <br /> Final Frontier
        </h1>

        <p className="max-w-xl text-base sm:text-lg leading-relaxed text-white">
          Just click any of the links below to contact me. 
        </p>

        <motion.div
          className="flex gap-6 text-white text-2xl mt-10"
          initial="hidden"
          animate="visible"
          variants={iconVariants}
        >
          <motion.a
            href="mailto:sohamdang@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            className="hover:text-orange-400 transition"
          >
            <FiMail />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/soham-dang-9ba897215"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/soham_.31"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="https://github.com/soham3131"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
