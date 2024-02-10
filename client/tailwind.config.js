/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: '-075em',
      tighter: '-05em',
      tight: '-025em',
      normal: '0',
      wide: '0.25em',
      wider: '0.8em',
      widest: '1em',
    },
    extend: {
      backgroundImage : {
        'bg-pink' : "url('/images/pinkBg.jpg')",
      },
      colors : {
        'contactList' : '#574c50',
        'rose-red' : '#7b2934',
        'accordion-blue' : '#edeef1',
        'accordion-rose' : '#f7f3f4',
        'fafafa': '#fafafa',
        'eee' : '#eee',
        '544f4f' : '#544f4f',
      },
      fontFamily : {
        'godo' : ['godo'],
        'dodum' : ['dodum'],
        'sans' : ['sans'],
        'lora' : ['lora'],
      }
    },
    screens: {
      '2xs':'280px',
      // => @media (min-width: 280) { ... }
      'xs': '360px',
      // => @media (min-width: 360px) { ... }
      'sm': '550px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

