const PUBLIC_PATH = '/';
const themeColor = '#5aa7c7';
const bgColor = '#8dd8f8';
const favicon = '';
// const favicon = ''; // Base 64 Image can go here

module.exports = {
  title: 'React App',
  PUBLIC_PATH,
  themeColor,
  preCache: {
    cacheId: 'website-cache-id',
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    filename: 'service-worker.js',
    minify: true,
    navigateFallback: `${PUBLIC_PATH}index.html`,
    staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
  },
  manifest: {
    name: 'React App',
    short_name: 'App', // 12 Characters max.
    description: '',
    background_color: bgColor,
    theme_color: themeColor,
    'theme-color': themeColor,
    start_url: PUBLIC_PATH,
    // icons: [
    //   {
    //     src: path.resolve('src/core/assets/images/PWA_Icon.jpg'),
    //     sizes: [96, 128, 192, 256, 384, 512],
    //     destination: path.join('assets', 'icons'),
    //   },
    // ],
  },
  favicon,
};
