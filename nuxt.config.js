export default {
  mode: 'spa',
  srcDir: 'resources/nuxt',
  router: {
    base: '/nuxt-app'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [],
  redirect: [
    // force trailing slash at the end of all urls
    {
      from: '^.*(?<!/)$',
      to:   (from, req) => req.url + '/',
    },
  ],

  /*
   ** Build configuration
   */
  build: {
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[name].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[name].js',
      css: ({ isDev }) => isDev ? '[name].css' : '[name].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[name].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[name].[ext]'
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test:    /\.(js|vue)$/,
          loader:  'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
      // eslint-disable-next-line no-param-reassign
      ctx.loaders.cssModules.localIdentName = '[local]-[hash:base64:5]';
    },
    babel: {
      presets() {
        return [
          [
            '@nuxt/babel-preset-app', { loose: true },
          ],
        ];
      },
    },
  },
  /*
   ** Generate configuration
   */
   generate: {
     dir: 'public/nuxt-app'
   }
};
