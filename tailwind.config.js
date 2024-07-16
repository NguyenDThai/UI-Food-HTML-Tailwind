/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
    './**/*.{html,js}',
  ],
  theme: {
    extend: {
      height:{
        custom: '620px',
      },
      spacing:{
        '40-c':'40rem',
      },
      translate:{
        't-30':'30%',
      },
    },
  },
  plugins: [],
}

