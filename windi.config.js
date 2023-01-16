import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  plugins: [
    require('windicss/plugin/typography'),
    // ...
  ],

  theme: {
    extend: {
      colors: {
        black: '#101014',
        noble: '#1F2128',
        eigengrau: '#16171D',
        april: '#9BA0B3',
        baiko: '#887935'
      },
      backgroundImage: {
        'hero': "url('/images/kelsey-knight-udj2tD3WKsY-unsplash.webp')",
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'sans-serif'],
        serif: ['"Noto Serif"', 'serif']
      },
    },
    height: {
      'hero': 'calc(100vh - 60px)',
    },

    typography: ({ theme }) => ({
      DEFAULT: {
        css: {
          p: { 
            fontSize: 'inherit',
            color: '#9ba0b3',
            marginBottom: '2rem',
          }
        },
      },
    })


  }
})