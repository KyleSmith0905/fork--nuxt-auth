export default defineNuxtConfig({
  modules: ['../src/module.ts'],
  auth: {
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
