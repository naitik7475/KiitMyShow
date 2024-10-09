import { Button } from "flowbite-react"
import flowbite from "flowbite-react/tailwind"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
        height:{
          "128" : "32rem",
        },
        colors:{
          transparent: 'transparent',
          "button": "#075985",
          "date": "#9cafa3",
        }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

