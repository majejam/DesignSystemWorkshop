export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'workshop-1',
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
  plugins: [],
  components: true,
  modules: ['@nuxtjs/style-resources'],
  build: {},
}
