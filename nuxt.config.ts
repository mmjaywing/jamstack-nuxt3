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
  ],

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