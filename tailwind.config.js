// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure to include paths to all your files
  ],
  theme: {
    extend: {
      colors: {
        'pipboy-green': '#3f6', // Custom green color for the Pip-Boy UI
      },
      fontFamily: {
        mono: ['Roboto Mono', 'monospace'], // Monospaced font for the retro look
      },
      // Add any other customizations here
    },
  },
  plugins: [],
}
