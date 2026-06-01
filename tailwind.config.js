/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        ivory: '#F8F8F8',
        line: '#EAEAEA',
        ink: '#111111',
        graphite: '#222222',
        mist: '#8A98A8',
      },
      fontFamily: {
        hand: ['Caveat', 'Kalam', 'Architects Daughter', 'cursive'],
        sans: ['Inter', 'Manrope', 'DM Sans', 'sans-serif'],
      },
      boxShadow: {
        paper: '0 24px 80px rgba(17, 17, 17, 0.08)',
        glass: '0 16px 48px rgba(17, 17, 17, 0.12)',
        darkpaper: '0 24px 80px rgba(255, 255, 255, 0.06)',
      },
      keyframes: {
        glassSweep: {
          '0%': { transform: 'translateX(-130%) skewX(-18deg)' },
          '100%': { transform: 'translateX(230%) skewX(-18deg)' },
        },
        draw: {
          '0%': { strokeDashoffset: '260' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        glassSweep: 'glassSweep 6s ease-in-out infinite',
        draw: 'draw 1.6s ease forwards',
      },
    },
  },
  plugins: [],
};
