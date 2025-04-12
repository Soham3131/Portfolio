/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontFamily: {
               century: ["Century Gothic", "sans-serif"], 
               impact: ['Impact Regular', 'sans-serif'],
               impacted: ['Impacted Regular', 'sans-serif'],
            },},
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         century: ["Century Gothic", "sans-serif"], // 👈 Add this
//       },
//     },
//   },
//   plugins: [],
// };
