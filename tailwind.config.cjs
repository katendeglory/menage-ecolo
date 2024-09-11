module.exports = {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        "brand-blue-second": "#133b6e",
        "brand-blue-primary": "#3695cb",
        // ....................
        // "brand-primary": "#EC407A",
        "brand-primary": "#F9A825",
        // .....................
        "brand-white": "#f5f5f5",
        "brand-white-light": "#f0f0f0",
        // .....................
        "brand-black": "#212121",

      },
    },
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}