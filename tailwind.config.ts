/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "dark-layer-1": "rgb(40,40,40)",
        // "dark-layer-2": "rgb(26,26,26)",

        "dark-layer-1": "rgb(54, 80, 108)",
        "dark-layer-2": "rgb(35, 49, 66)",

        "dark-label-2": "rgba(239, 241, 246, 0.75)",
        "dark-divider-border-2": "rgb(61, 61, 61)",
        "dark-fill-2": "hsla(0,0%,100%,.14)",
        "dark-fill-3": "hsla(0,0%,100%,.1)",
        "dark-gray-6": "rgb(138, 138, 138)",
        "dark-gray-7": "rgb(179, 179, 179)",
        "gray-8": "rgb(38, 38, 38)",
        "dark-gray-8": "rgb(219, 219, 219)",
        "brand-orange": "rgb(255 161 22)",
        "brand-orange-s": "rgb(193, 122, 15)",
        "dark-yellow": "rgb(255 192 30)",
        "dark-pink": "rgb(255 55 95)",
        olive: "rgb(0, 184, 163)",
        "dark-green-s": "rgb(44 187 93)",
        "dark-blue-s": "rgb(10 132 255)",
        "dark-teal-1": "rgb(94, 170, 168)",
        "dark-rose-1": "rgb(201, 104, 104)",
        "soft-peach-1": "rgb(250, 223, 161)",
        "ivory-blush-1": "rgb(255, 244, 234)",
        "muted-sky-1": "rgb(126, 172, 181)",
        // "": "rgb(165, 222, 241)",
        // "": "rgb(235, 247, 253)",
      },
    },
  },
  plugins: [],
};

export default config;

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",

//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         "dark-layer-1": "rgb(40,40,40)",
//         "dark-layer-2": "rgb(26,26,26)",
//         "dark-label-2": "rgba(239, 241, 246, 0.75)",
//         "dark-divider-border-2": "rgb(61, 61, 61)",
//         "dark-fill-2": "hsla(0,0%,100%,.14)",
//         "dark-fill-3": "hsla(0,0%,100%,.1)",
//         "dark-gray-6": "rgb(138, 138, 138)",
//         "dark-gray-7": "rgb(179, 179, 179)",
//         "gray-8": "rgb(38, 38, 38)",
//         "dark-gray-8": "rgb(219, 219, 219)",
//         "brand-orange": "rgb(255 161 22)",
//         "brand-orange-s": "rgb(193, 122, 15)",
//         "dark-yellow": "rgb(255 192 30)",
//         "dark-pink": "rgb(255 55 95)",
//         olive: "rgb(0, 184, 163)",
//         "dark-green-s": "rgb(44 187 93)",
//         "dark-blue-s": "rgb(10 132 255)",
//       },
//     },
//   },
//   plugins: [],
// };
