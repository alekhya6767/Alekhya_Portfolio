/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-size': '40px 40px',
      },
      colors: {
        // Primary color palette - Purple theme
        primary: {
          50: 'rgb(250, 245, 255)',
          100: 'rgb(243, 232, 255)',
          200: 'rgb(233, 213, 255)',
          300: 'rgb(216, 180, 254)',
          400: 'rgb(196, 145, 251)',
          500: 'rgb(168, 85, 247)',
          600: 'rgb(147, 51, 234)',
          700: 'rgb(126, 34, 206)',
          800: 'rgb(107, 33, 168)',
          900: 'rgb(88, 28, 135)',
        },
        // Secondary color palette
        secondary: {
          50: 'rgb(236, 253, 245)',
          100: 'rgb(209, 250, 229)',
          200: 'rgb(167, 243, 208)',
          300: 'rgb(110, 231, 183)',
          400: 'rgb(52, 211, 153)',
          500: 'rgb(16, 185, 129)',
          600: 'rgb(5, 150, 105)',
          700: 'rgb(4, 120, 87)',
          800: 'rgb(6, 95, 70)',
          900: 'rgb(6, 78, 59)',
        },
        // Neutral colors
        gray: colors.gray,
        // Status colors
        success: colors.green,
        warning: colors.amber,
        error: colors.red,
        info: colors.blue,
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled', 'hover'],
      backgroundColor: ['active', 'disabled', 'dark'],
      textColor: ['active', 'disabled', 'dark'],
      borderColor: ['active', 'disabled', 'dark'],
      ringColor: ['hover', 'active', 'focus-within', 'dark'],
      ringWidth: ['hover', 'active', 'focus-within'],
      ringOffsetWidth: ['hover', 'active', 'focus-within'],
      ringOffsetColor: ['hover', 'active', 'focus-within'],
      scale: ['active', 'group-hover'],
      translate: ['group-hover'],
      animation: ['motion-safe', 'motion-reduce'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.10)',
        },
        '.text-shadow-md': {
          textShadow: '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
        },
        '.text-shadow-lg': {
          textShadow: '0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
