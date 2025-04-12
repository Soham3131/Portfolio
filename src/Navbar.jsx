import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import gsap from "gsap";
import sohamdanggg from "./Images/sohamdanggg.png";

const ShatterEffect = () => {
  const sRef = useRef(null);
  const particleContainerRef = useRef(null);

  const handleMouseEnter = () => {
    const sElement = sRef.current;
    const container = particleContainerRef.current;
    if (!sElement || !container) return;

    const rect = sElement.getBoundingClientRect();
    const numParticles = 20;

    container.innerHTML = "";

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("span");
      particle.className = "particle";
      particle.innerText = "✦";
      container.appendChild(particle);

      gsap.set(particle, {
        position: "absolute",
        top: rect.top + rect.height / 2 + "px",
        left: rect.left + rect.width / 2 + "px",
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

    gsap.to(sElement, {
      duration: 0.3,
      opacity: 0,
      scale: 2,
      filter: "blur(5px)",
      ease: "power3.out",
    });

    gsap.to(sElement, {
      duration: 0.5,
      delay: 0.5,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <>
      <span
        ref={sRef}
        className="text-[4rem] inline-block cursor-pointer relative"
        onMouseEnter={handleMouseEnter}
      >
        S
      </span>
      <div ref={particleContainerRef} className="absolute top-0 left-0 pointer-events-none"></div>
    </>
  );
};

// ⭐ New Function: Click Effect (Triggers When Clicking Projects, Skills, Contact)
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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md  p-4 relative">
      <div className="container mx-auto flex justify-between text-white items-center">
        {/* Logo & Animated Text */}
        <Link to="/">
          <div className="flex items-center">
            <img
              src={sohamdanggg}
              className="hover:rotate-45 h-[70px] w-[70px] hover:transition-all hover:duration-500"
              alt="Soham Logo"
            />
            <p className=" ml-2 font-bold font-century text-[3rem] z-50 hover:translate-x-2 hover:scale-105 hover:transition-all hover:duration-500 shadow-black">
              <ShatterEffect />oham Dang
            </p>
          </div>
        </Link>

        {/* Menu Button (Visible on Small Screens) */}
        <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX className="text-white opacity-75 hover:opacity-100 text-[35px]" /> : <FiMenu className="text-white text-[35px]" onClick={triggerClickEffect} />}
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex mr-5 space-x-6 items-end justify-end mx-auto font-bold text-[20px]">
          <Link to="/projects" className="text-white hover:text-white opacity-75 hover:opacity-100" onClick={triggerClickEffect}>
            Projects
          </Link>
          <Link to="/skills" className="text-white opacity-75 hover:opacity-100 hover:text-white" onClick={triggerClickEffect}>
            Skills
          </Link>
          <Link to="/contact" className="text-white opacity-75 hover:opacity-100 hover:text-white" onClick={triggerClickEffect}>
            Contact Me
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Visible when menuOpen is true) */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-start mt-4 border-t">
          <Link to="/" className="block p-3 w-full text-white hover:bg-gray-100 opacity-75 hover:opacity-100" onClick={triggerClickEffect}>
            Projects
          </Link>
          <Link to="/events" className="block p-3 w-full text-white hover:bg-gray-100 opacity-75 hover:opacity-100" onClick={triggerClickEffect}>
            Skills
          </Link>
          <Link to="/about" className="block p-3 w-full text-white hover:bg-gray-100 opacity-75 hover:opacity-100" onClick={triggerClickEffect}>
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
