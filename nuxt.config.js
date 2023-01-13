import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Jaywing',
      link: [
        {
          rel: 'icon',
          type: 'image/*',
          href: '/favicon.svg'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'crossorigin',
        },
        {
          rel: 'preload',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Noto+Serif&display=swap',
          as: 'style',
          onload: "this.onload=null;this.rel='stylesheet'"
        },
      ],
      meta: [ 
        { name: 'description', content: 'Meta description' }
      ],
      htmlAttrs: {
        lang: 'en'
      },
    }
  },

  /* vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style.scss" as *;'
        }
      }
    }
  }, */ 

  modules: [
    'nuxt-windicss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/image-edge'
  ],

  buildModules: ['@pinia/nuxt'],

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL || "default_api_url",
      API_ASSETS_URL: process.env.API_ASSETS_URL || "default_api_url"
    }
  },

  routeRules: {
    /* '/blog/**': { swr: true },
    '/blog/**': { swr: 600 },
    '/blog/**': { static: true },
    '/blog/**': { cache: {  } },
    '/assets/**': { headers: { 'cache-control': 's-maxage=0' } },
    '/api/v1/**': { cors: true, headers: { 'access-control-allowed-methods': 'GET' } },
    '/old-page': { redirect: '/new-page' } */ 


    'https://cloud.squidex.io/api/assets/87972021-6ff5-47f5-bb6f-a2a9ea899fd4/**': { headers: { 'cache-control': 's-maxage=1d' } },
     

  }
})