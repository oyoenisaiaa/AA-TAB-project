/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // this is the global index.html with fonts for Tailwind CSS to scan for classes used in codes on different pages / components
    "./src/**/*.{js,ts,jsx,tsx}", // this covers all files in src directory
  
  ],

  
  theme: {
    extend: {
      backgroundImage: {
        'logo-b': "url(./assets/tab-logo-blue.png)",
        'logo-w': "url(./assets/tab-logo-white.png)",
        'logo-figma': "url(./assets/tab-logo-figma.png)", 
        'hero-image': "url(./assets/hero-image.png)",
        'about-us-long': "url(./assets/about-us-long.png)",
        'about-us-short1': "url(./assets/about-us-short1.png)",
        'about-us-short2': "url(./assets/about-us-short2.png)",
        'footer-image': "url(./assets/footer-image.png)",
        'relax-help' : "url(./assets/relax-help.png)",
        'mind-help' : "url(./assets/mindfulness-help.png)",
        'stretch-help' : "url(./assets/stretch-help.png)",
        'pc-col1-top' : "url(./assets/pc-col1-top.png)",
        'pc-col1-down' : "url(./assets/pc-col1-down-ai.png)",
        'pc-col2-center' : "url(./assets/pc-col2-center.png)",
        'pc-col3-top' : "url(./assets/pc-col3-top.png)",
        'pc-col3-down' : "url(./assets/pc-col3-down.png)",
        'unomaImage': "url(../assets/team/Unoma Okoro_Nigeria.jpg)",
        
        // 'facebook-icon': "url(./assets/facebook-icon.svg)",
        // 'twitter-icon': "url(./assets/twitter-icon.svg)",
        // 'twitter-icon': "url(./assets/twitter-icon.png)",
        // 'youtube-icon': "url(./assets/youtube-icon.svg)",
      },
      fontSize: {
          '16': '16px',
          '24': '24px',
          '48': '48px',
          '500': '500px',
        },
        fontFamily: {
          'be-vietnam-pro-regular': ['"Be Vietnam Pro"', 'sans-serif'],// for Be Vietnam Pro font family with sans-serif as fall back incase any browser doesn't support the project font
          'be-vietnam-pro-medium': ['"Be Vietnam Pro Medium"', 'sans-serif'],
          'be-vietnam-pro': ['"Be Vietnam Pro"', 'sans-serif'],
          'inter-regular': ['Inter', 'sans-serif'], // Inter font family
          'roboto': ['Roboto', 'sans-serif'], // Roboto font family
        },

        fontWeight: {
          'be-vietnam-pro-medium': 500,
        },

        colors: {
          mindPageBlue: '#0F52BA',
        },

        screens: {
          'sm': '640px',
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
  },

  variants: {},
  plugins: [],
};
