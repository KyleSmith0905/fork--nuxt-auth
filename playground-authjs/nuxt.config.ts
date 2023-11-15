export default defineNuxtConfig({
  modules: ['../src/module.ts'],
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: 'authjs'
    }
  },
  routeRules: {
    '/': {
      prerender: true
    },
    '/**': {
      prerender: true
    }
  }
})
