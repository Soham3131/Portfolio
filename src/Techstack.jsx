import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Tailwind CSS', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Mongoose', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'DSA', logo: 'https://camo.githubusercontent.com/d380a80458950c7c8b77f232e3faca95a3ed7b3bbbfb2228ea2573c60c9b7627/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f61345872632d386f514c7530356d4f724e507576415f6f326e5a4549456e4f6f54483477423931536c775f6843767549755f516769343430624b396d43386d6c2d4b41' }, 
];

const Techstack = () => {
  return (
    <div className="bg-white py-20 px-6 sm:px-10 mb-20">
      <h2 className="text-[4rem] sm:text-[5rem] font-extrabold text-center text-black mb-16">
        My Tech Stack
      </h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-12 justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col items-center transition-transform"
            variants={{
              hidden: { opacity: 0, y: 80, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 120,
                  damping: 15
                }
              }
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)'
            }}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-28 h-28 object-contain"
            />
            <div className="absolute bottom-[-2.5rem] opacity-0 group-hover:opacity-100 transition text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded shadow-sm">
              {tech.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Techstack;
