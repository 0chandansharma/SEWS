/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#f0f7ff',
            100: '#daeafe',
            200: '#bcd7fe',
            300: '#8ebbfc',
            400: '#5694f8',
            500: '#3272f0',
            600: '#2057e5',
            700: '#1a42ce',
            800: '#1a3ba7',
            900: '#1b3a83',
            950: '#142453',
          },
          secondary: {
            50: '#f3f1ff',
            100: '#ebe5ff',
            200: '#d9ceff',
            300: '#bca4ff',
            400: '#9e70ff',
            500: '#843dff',
            600: '#7916ff',
            700: '#6b09f6',
            800: '#5a0cd0',
            900: '#4b0fa8',
            950: '#2d0575',
          },
          neutral: {
            850: '#1e293b',
          },
          dark: {
            100: '#d5d7e0',
            200: '#acaebf',
            300: '#8c8fa3',
            400: '#666980',
            500: '#4d4f66',
            600: '#34354a',
            700: '#2b2c3d',
            800: '#1d1e30',
            900: '#0c0d21',
          },
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
          display: ['Plus Jakarta Sans', 'Inter', 'ui-sans-serif', 'system-ui'],
          mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        },
        boxShadow: {
          'strong': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
          'card': '0 7px 20px rgba(0, 0, 0, 0.05)',
          'card-hover': '0 10px 30px rgba(0, 0, 0, 0.08)',
        },
        backgroundImage: {
          'hero-pattern': "linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url('/images/hero-bg.jpg')",
          'service-pattern': "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url('/images/service-bg.jpg')",
          'cta-gradient': "linear-gradient(to right, #3272f0, #843dff)",
          'dark-gradient': "linear-gradient(to right bottom, #1d1e30, #2b2c3d)",
        },
        borderRadius: {
          'xl': '1rem',
          '2xl': '1.5rem',
          '3xl': '2rem',
        },
        animation: {
          'fade-in': 'fadeIn 0.8s ease-in-out forwards',
          'slide-up': 'slideUp 0.8s ease-out forwards',
          'slide-in-right': 'slideInRight 0.8s ease-out forwards',
          'pulse-slow': 'pulse 3s infinite',
          'float': 'float 6s ease-in-out infinite',
          'blur-in': 'blurIn 0.8s ease-out forwards',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(30px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          slideInRight: {
            '0%': { transform: 'translateX(30px)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          blurIn: {
            '0%': { filter: 'blur(10px)', opacity: '0' },
            '100%': { filter: 'blur(0)', opacity: '1' },
          },
        },
        typography: {
          DEFAULT: {
            css: {
              maxWidth: '100ch',
            },
          },
        },
      },
    },
    plugins: [],
  }