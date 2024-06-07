/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://lh3.googleusercontent.com/drive-viewer/AKGpihY9DVvMG938rkvt5Ts38QibnhNl7qRWpeQK5AvVMi-8Y353dl7P_V8lHUxg8WjJwBpQ32jFXPFSBSDmEUNuqOWb8EYhRJLubZs=s1600-rw-v1')",
      },
    },
  },
  plugins: [],
}

