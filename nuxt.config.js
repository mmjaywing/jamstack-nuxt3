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

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style.scss" as *;'
        }
      }
    }
  },

  modules: [
    'nuxt-windicss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt/image-edge'
  ],

  buildModules: ['@pinia/nuxt'],

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL || "default_api_url",
      API_ASSETS_URL: process.env.API_ASSETS_URL || "default_api_url"
    }
  }
})