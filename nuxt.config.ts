// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
  ],
  experimental: {
    asyncContext: true,
  },
  i18n: {
    locales: [
      {
        code: 'de',
        iso: 'de-DE',
        file: 'fetchTranslations.js',
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'fetchTranslations.js',
      },
    ],
    experimental: {
      jsTsFormatResource: true,
    },
    compilation: {
      strictMessage: false,
    },
    lazy: true,
    langDir: 'i18n/',
    defaultLocale: 'de',
    fallbackLocale: 'de',
    strategy: 'prefix_and_default',
    baseUrl: 'localhost:3000',
    debug: false,
  }
})
