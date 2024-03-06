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
      {
        code: 'fr',
        iso: 'en-US',
        file: 'fetchTranslations.js',
      },
      {
        code: 'ar',
        iso: 'en-US',
        file: 'fetchTranslations.js',
      },
      {
        code: 'hi',
        iso: 'en-US',
        file: 'fetchTranslations.js',
      },
      {
        code: 'hr',
        iso: 'en-US',
        file: 'fetchTranslations.js',
      },
      {
        code: 'nl',
        iso: 'en-US',
        file: 'fetchTranslations.js',
      },
      {
        code: 'sk',
        iso: 'en-US',
        file: 'fetchTranslations.js',
      },
      {
        code: 'sl',
        iso: 'en-US',
        file: 'fetchTranslations.js',
      },
      {
        code: 'vi',
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
