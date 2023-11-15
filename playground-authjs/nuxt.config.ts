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
    '/guest': {
      prerender: true
    },
    '/**': {
      prerender: true
    }
  }
})
