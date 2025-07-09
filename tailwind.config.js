/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tex-gyre-heros': ['Tex Gyre Heros', 'Helvetica', 'sans-serif'],
        'univers-lt-std-ex': ['UniversLTStd-Ex', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
