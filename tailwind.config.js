/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'faded-jade': {
        50: '#f4f9f8',
        100: '#daedea',
        200: '#b5dad5',
        300: '#89bfba',
        400: '#60a19d',
        500: '#417d7a',
        600: '#366b69',
        700: '#2e5756',
        800: '#284747',
        900: '#253c3c',
        950: '#112122',
      },
    },
  },
  plugins: [],
};
