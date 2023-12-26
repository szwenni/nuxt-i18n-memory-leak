import fs from 'fs';


export const translationCache = {};

export default defineEventHandler((event) => {
    const { language } = event.context.params;
    const publicPath =
      process.env.NODE_ENV === 'production' ? '.output/public' : 'public';
    const translationPath =
      (process.client ? '' : publicPath) +
      '/translations/' +
      language +
      '.json';
    if (!translationCache[language] || process.env.NODE_ENV !== 'production') {
      translationCache[language] = JSON.parse(fs.readFileSync(translationPath));
    }
    return translationCache[language];
});