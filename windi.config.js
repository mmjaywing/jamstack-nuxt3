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
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  }
})