/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#348DB3',
        'custom-white': '#FAFAFA',
        'custom-lightGrey': '#F7F7F7',
        'custom-darkGrey': '#9CA3AF',
        'custom-lightBlack': '#6E6B6B',
        'custom-black': '#000000',
        'custom-yellow': '#F1B646',
      },
    },
  },
  screens: {
    xs: '480px',
    ss: '620px',
    sm: '768px',
    md: '1060px',
    lg: '1200px',
    xl: '1700px',
  },
  plugins: [],
};
