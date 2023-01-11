import { defineNuxtConfig } from 'nuxt/config'

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
    '@nuxt/image-edge'
  ],

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL || "default_api_url",
      API_ASSETS_URL: process.env.API_ASSETS_URL || "default_api_url"
    }
  }
})