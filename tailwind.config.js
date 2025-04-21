/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor:{
        'bg-color': '#F2F2F2',
        'bg-product': '#F9F9F9',
        'secound':'#FF4B3A',
        'primary' : '#FA4A0C',
        'gray' : '#EAE9E9'
      },
      textColor:{
        'disable' : '#9A9A9D',
        'yellow' : '#E1FF00',
        'primary' : '#FA4A0C',
      },
      fontFamily:{
        'Pinar-light' : 'Pinar-light',
        'Pinar-medium' : 'Pinar-medium',
        'Pinar-bold' : 'Pinar-bold',
        'Pinar-extra' : 'Pinar-extra',
      }
    },
  },
  plugins: [],
}

