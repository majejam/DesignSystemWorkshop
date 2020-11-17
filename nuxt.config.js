export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'User Dashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['@/assets/styles/main.scss'],
  /*
   ** Import SCSS for components
   */
  styleResources: {
    scss: ['@/assets/styles/main.scss'],
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
  plugins: [],
  components: true,
  modules: ['@nuxtjs/style-resources', '@nuxtjs/color-mode'],
  build: {},
}
