import { defineNuxtConfig } from 'nuxt/config'
// import ViteComponents from 'unplugin-vue-components/vite'
// import IconsResolver from 'unplugin-icons/resolver'



export default defineNuxtConfig({
  app: {
    head: {
      title: 'Jaywing',
      link: [{ rel: 'icon', type: 'image/*', href: '/favicon.svg' }],
      meta: [ 
        { name: 'description', content: 'Meta description' }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },


  modules: [
    'nuxt-windicss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    prefetch: true,
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  }

  

  /* modules: [
    'nuxt-windicss',
    '@pinia/nuxt',
    'unplugin-icons/nuxt',
    '@vueuse/nuxt',
    [
      '@intlify/nuxt3',
      {
        localeDir: 'locales',
        vueI18n: {
          locale: 'en'
        }
      }
    ]
  ], */
  /* vite: {
    plugins: [
      ViteComponents({
        resolvers: [
          IconsResolver({
            componentPrefix: ''
          })
        ],
        dts: true
      })
    ]
  } */
})