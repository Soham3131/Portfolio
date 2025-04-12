import React from 'react';
import moon1 from "./Images/moon1.gif";

const Moon = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={moon1}
        alt="moon"
        className="w-full rounded-lg h-full object-cover"
      />

      <div className="absolute top-1/2 left-4 sm:left-10 md:left-16 transform -translate-y-1/2 text-white max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">ABOUT</h1>

        <p className="text-base sm:text-lg font-semibold mb-2">
          FLEXIBLE | DESIGN-DRIVEN | TECH ENTHUSIAST
        </p>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
          I’m a passionate web developer with a strong eye for design and a deep love for tech. With experience in full-stack frontend development and a solid foundation in graphic design, I build digital experiences that are both visually compelling and highly functional.
          <br /><br />
          Over the past few months, I’ve worked as a web developer intern, blending clean code with creative layouts, crafting responsive interfaces that bring ideas to life. I thrive in fast-paced environments, always eager to learn, adapt, and push the limits of what’s possible.
          <br /><br />
          Hardworking, flexible, and constantly experimenting — I believe great design starts with great code and ends with a seamless user experience.
        </p>

        <button className="bg-black border-2 border-white text-white px-5 py-2 rounded-full font-medium hover:bg-white hover:text-black transition duration-300">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Moon;
