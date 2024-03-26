const getBaseUrl = () => {
  return process.env.AUTH_ORIGIN?.split('/api/auth')[0] ?? `http://localhost:${process.env.PORT || 3000}`
}

export default defineNuxtConfig({
  modules: ['../src/module.ts'],
  auth: {
    provider: {
      type: 'authjs'
    },
    globalAppMiddleware: {
      isEnabled: true
    },
    baseURL: getBaseUrl()
  },
  routeRules: {
    '/with-caching': {
      // swr: 86400000,
      auth: {
        disableServerSideAuth: true
      }
    }
  }
})
