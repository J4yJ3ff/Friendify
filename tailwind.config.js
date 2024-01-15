/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "background": "#575C62",
        "cards": "#50565B",
        "accent": "#667773",
      },
      colors: {
        'accent': "#667773",
      },
      textColor: {
        "accent": "#667773",
        "pcolor": "#B3BEB1",
        "accent-two": "#635A52"
      },
      fontFamily: {
        "Moby": "Moby",
        "Carbon": "CarbonThin"
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [],
}

