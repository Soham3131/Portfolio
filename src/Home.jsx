import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import soha from "./Images/soha.png"
import Design from "./Design";
import Moon from "./Moon";
import Techstack from "./Techstack";
import Projects from "./Projects";
import DetailP from "./DetailP";
import Footer from "./Footer";
import { TbMoonStars, TbSunMoon } from "react-icons/tb";

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
    <div className="relative p-5 bg-white w-full min-h-screen">
      {/* --- Persistent Sidebar & Toggle Button --- */}
      <div className="fixed top-0 left-0 z-50 flex flex-col">
        {/* Toggle Button */}
        <button
          className="m-6 z-50 text-white text-[35px] bg-black bg-opacity-60 p-3 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <TbSunMoon /> : <TbMoonStars />}
        </button>

        {/* Sidebar */}
        <div
          className={`h-screen w-64 bg-black bg-opacity-90 text-white transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out p-6 fixed top-0 left-0 z-40`}
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
      </div>

      {/* --- Hero Section --- */}
      <div className="relative w-full h-screen">
        <img className="w-full h-full rounded-lg object-cover" src={soha} alt="Background" />

        {/* Static Text Block */}
        <div className="absolute top-1/3 right-10 text-white text-right z-10">
          <h2 className="text-2xl font-light">I AM</h2>
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span>SOHAM DANG</span>
          </div>
          <div className="sm:text-4xl text-3xl md:text-5xl font-extrabold mt-2">
            A <span className="text-orange-400 ml-2">{displayText}</span>
          </div>
          <Link to="/contact">
            <button
              className="bg-orange-400 p-3 rounded-md mt-5"
              onClick={triggerClickEffect}
            >
              Hire me!
            </button>
          </Link>
        </div>
      </div>

      {/* --- Page Content --- */}
      <Design />
      <Moon />
      <Techstack />
      <Projects />
      <DetailP />
      <Footer />
    </div>
  );
};

export default Home;
