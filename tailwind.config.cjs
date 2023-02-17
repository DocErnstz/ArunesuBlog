/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,astro,svelte,js}"],
  options: {
    // Generate col-span-1 -> 12
    safelist: [...Array.from({ length: 12. }).fill('').map((_, i) => `col-span-${i + 1}`)],
  },
  theme: {
    extend: {
      fontFamily: {
        opensans: ['"Open Sans"', 'sans-serif'],
        abril: ['"Abril Fatface"', 'cursive'],
      },
    },
  },
  plugins: [],
}