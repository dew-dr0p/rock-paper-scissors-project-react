/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      gradients: {
        backgroundA: '#1F3756',
        backgroundB: '#141539',
        scissorsA: '#EC9E0E',
        scissorsB: '#ECA922',
        paperA: '#4865F4',
        paperB: '#5671F5',
        lizardA: '#834FE3',
        lizardB: '#8C5DE5',
        rockA: '#DC2E4E',
        rockB: '#DD405D',
        cyanA: '#40B9CE',
        cyanB: '#52BED1'
      },
      text: {
        dark: '#3B4363',
        score: '#2A46C0',
        headerOutline: '#606E85'
      },
    },
    extend: {},
  },
  plugins: [],
}