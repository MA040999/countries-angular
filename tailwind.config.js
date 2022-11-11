/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit-200": 'repeat(auto-fit, minmax(200px, 1fr))',
        "auto-fit-250": 'repeat(auto-fit, minmax(250px, 1fr))',
        "auto-fit-150": 'repeat(auto-fit, minmax(150px, 1fr))'
      },
      colors: {
        "clr-primary": 'hsl(var(--clr-primary) / <alpha-value>)',
        "clr-secondary": 'hsl(var(--clr-secondary) / <alpha-value>)',
        white: 'hsl(var(--white) / <alpha-value>)',
        "clr-text": 'hsl(var(--clr-text) / <alpha-value>)',
        "clr-placeholder": 'hsl(var(--clr-placeholder) / <alpha-value>)',
      },
      padding: {
        "viewport-inline-padding": '7vw',     
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          'primary': "hsl(0 0% 100%)",
          'secondary': "hsl(0 0% 98%)",
          'neutral': "hsl(0 0% 98%)",
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          'primary': "hsl(209 23% 22%)",
          'secondary': "hsl(207 26% 17%)",
          'neutral': "hsl(207 26% 17%)",
        },
      },
    ],
  }
}
