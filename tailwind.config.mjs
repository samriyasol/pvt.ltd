/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 15s linear infinite', // क्लॉकवाइज़
        'spin-slow-reverse': 'spin-reverse 15s linear infinite', // एंटी-क्लॉकवाइज़
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' }, // उल्टा घुमाने के लिए -360
        },
      },
    },
  },
  plugins: [],
};