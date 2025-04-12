import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import gsap from "gsap";
import sohamm from "./Images/sohamm.png";
import Design from "./Design";
import Moon from "./Moon";
import Techstack from "./Techstack";
import Projects from "./Projects";
import DetailP from "./DetailP";
import Footer from "./Footer";
import { Router,Routes,Route } from "react-router-dom";
import Contact from "./Contact";

const movingTexts = ["CODER", "FULL STACK DEVELOPER", "FRONTEND DEVELOPER", "GRAPHIC DESIGNER"];

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

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentWord, setCurrentWord] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const word = movingTexts[currentWord];

      if (isDeleting) {
        setDisplayText(word.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setDisplayText(word.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === word.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % movingTexts.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 100 : 150);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, currentWord]);

  return (
   
    <div className="relative bg-white p-7 w-full h-screen">
      {/* Background Image */}
      <img className="w-full rounded-md h-full object-cover" src={sohamm} alt="Background" />

      {/* Sidebar Menu Button (on the left) */}
      <button
        className="absolute top-8 left-8 z-50 text-white text-[35px] bg-black bg-opacity-50 p-2 rounded-md"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX className="hover:opacity-80" /> : <FiMenu className="hover:opacity-80" />}
      </button> 

      {/* Left Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-90 text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 p-6`}
      >
        <nav className="flex flex-col mt-[65px] space-y-6">
          <Link to="/" className="hover:text-gray-400 text-lg" onClick={triggerClickEffect}>
            Home
          </Link>
          {/* <Link to="/events" className="hover:text-gray-400 text-lg" onClick={triggerClickEffect}>
            Skills
          </Link> */}
          <Link to="/contact" className="hover:text-gray-400 text-lg" onClick={triggerClickEffect}>
            Contact Me
          </Link>
        </nav>
      </div>

      {/* Right Side Text Animation */}
      <div className="absolute top-1/3 right-10 text-white text-right">
        <h2 className="text-2xl font-light">I AM</h2>
        <div className="flex text-6xl font-bold">
          <span className="block mr-2">SOHAM</span>
          <span className="block">DANG</span>
        </div>
        <div className="text-5xl font-extrabold mt-2">
          A <span className="text-orange-400">{displayText}</span>
        </div>

        {/* Hire Me Button with Sprinkle Effect */}
        <Link to="/contact">
          <button className="bg-orange-400 p-3 rounded-md mt-5 absolute right-5" onClick={triggerClickEffect}>
            Hire me!
          </button>
        </Link>
      </div>
      <Design/>
      <Moon/>
      <Techstack/>
      <Projects/>
      <DetailP/>
      <Footer/>

      
        
    
    </div>
   
  );
};

export default Home;
