/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './about/index.html',
    './services/index.html',
    './gallery/index.html',
    './reviews/index.html',
    './contact/index.html',
    './src/**/*.{js,html}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#111317',
          800: '#1c2027',
          700: '#252b33',
          600: '#343d4a',
          500: '#4a5568',
        },
        sky: {
          DEFAULT: '#5b9ec9',
          light: '#8fc0de',
          dark: '#3a7fa8',
          faint: '#f0f7fb',
        },
        cream: '#f8f6f2',
      },
      letterSpacing: {
        widest: '0.18em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
