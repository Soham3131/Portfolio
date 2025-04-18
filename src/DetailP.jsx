import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import codesph from "./Images/codesph.gif";
import codesph2 from "./Images/codesph2.png";
import andi2 from "./Images/andi2.gif";
import andi1 from "./Images/andi1.png";

import fashionv from "./Images/fashionv.gif"
import fashion1 from "./Images/fashion1.png";
import razorpay from "./Images/razorpay.gif";
import razorpay1 from "./Images/razorpay1.png";

import regis from "./Images/regis.gif";
import registerkaro1 from "./Images/registerkaro1.png";

const projects = [
  {
    title: "CodeSphere",
    description:
      "A full-stack EdTech platform with frontend/backend integration. Instructors manage content, students enroll & pay securely via Razorpay.",
    gif: codesph,
    static: codesph2,
  },
  {
    title: "Andi Software",
    description:
      "An IT service website for software solutions, development, and tech support with modern responsive UI.",
    gif: andi2,
    static: andi1,
  },
  {
    title: "Fashion Week",
    description:
      "Stay ahead in fashion with daily updates, trends, and stylish design inspiration in this aesthetic showcase.",
    gif: fashionv,
    static: fashion1,
  },
  {
    title: "Razorpay Clone",
    description:
      "A pixel-perfect clone of Razorpay's landing page with matching animations, layout, and sleek transitions.",
    gif: razorpay,
    static: razorpay1,
  },
  {
    title: "RegisterKaro",
    description:
      "A legal compliance platform offering online services for business registrations, tax filing, and more.",
    gif: regis,
    static: registerkaro1,
  },
];

const DetailP = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="p-4 sm:p-6 md:p-7 mt-7 rounded-md space-y-24 min-h-screen">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative w-full md:w-[55rem] mx-auto rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Image */}
          <img
            src={hoveredIndex === index ? project.gif : project.static}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
              hoveredIndex === index
                ? 'scale-105 grayscale-0 opacity-100'
                : 'grayscale opacity-60'
            }`}
          />

          {/* Project Number */}
          <p className="absolute top-4 right-6 text-[2rem] sm:text-[2.5rem] font-bold text-white/80 z-20">
            {index + 1}
          </p>

          {/* GitHub Icon on Hover with Light Blur */}
          {hoveredIndex === index && (
            <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/10 backdrop-blur-[1px]">
              <a
                href="https://github.com/Soham3131"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white text-5xl sm:text-6xl hover:scale-110 transition-transform duration-300 drop-shadow-xl" />
              </a>
            </div>
          )}

          {/* Text Overlay */}
          {hoveredIndex !== index && (
            <div className="absolute inset-0 p-4 sm:p-6 md:p-10 flex flex-col justify-end text-white z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-md mb-2 sm:mb-3 max-w-full">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-medium text-white/90 max-w-[90%] sm:max-w-xl">
                {project.description}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DetailP;
