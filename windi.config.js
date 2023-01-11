import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  shortcuts: {
    'text-primary': 'text-[#00DC82]'
  },
  plugins: [
    require('windicss/plugin/typography'),
    // ...
  ],

  theme: {
    extend: {
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

    })


  }
})