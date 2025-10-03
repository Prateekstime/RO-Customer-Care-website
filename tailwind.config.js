/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      animation: {
        'wave1': 'wave1 8s ease-in-out infinite',
        'wave2': 'wave2 6s ease-in-out infinite 0.5s',
        'wave3': 'wave3 10s ease-in-out infinite 1s',
        'wave4': 'wave4 7s ease-in-out infinite 1.5s',
      },
      keyframes: {
        wave1: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(-5px) translateY(2px)' },
          '50%': { transform: 'translateX(0) translateY(4px)' },
          '75%': { transform: 'translateX(5px) translateY(2px)' },
        },
        wave2: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(-8px) translateY(3px)' },
          '50%': { transform: 'translateX(0) translateY(6px)' },
          '75%': { transform: 'translateX(8px) translateY(3px)' },
        },
        wave3: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(-10px) translateY(4px)' },
          '50%': { transform: 'translateX(0) translateY(8px)' },
          '75%': { transform: 'translateX(10px) translateY(4px)' },
        },
        wave4: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(-12px) translateY(5px)' },
          '50%': { transform: 'translateX(0) translateY(10px)' },
          '75%': { transform: 'translateX(12px) translateY(5px)' },
        },
      },
    },
  },
  plugins: [],
}