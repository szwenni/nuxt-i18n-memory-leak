const languageCache = {};

export default defineI18nLocale((locale) => {
  // for example, fetch locale messages from nuxt server
  if (process.server) {
    if (languageCache[locale]) {
      console.log('fetching from language cache');
      return languageCache[locale];
    }
  }
  return $fetch(`/api/i18n/${locale}`).then((x) => {
    if (process.server) {
      languageCache[locale] = x;
    }
    return x;
  });
});