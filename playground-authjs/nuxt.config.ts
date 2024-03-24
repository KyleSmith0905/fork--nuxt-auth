export default defineNuxtConfig({
  modules: ['../src/module.ts'],
  auth: {
    provider: {
      type: 'authjs'
    },
    globalAppMiddleware: {
      isEnabled: true
    },
    baseURL: 'https://' + process.env.VERCEL_URL + '/api/auth'
  },
  routeRules: {
    '/with-caching': {
      swr: 86400000,
      auth: {
        disableServerSideAuth: true
      }
    }
  }
})
