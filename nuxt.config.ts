// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  groupChunks: {
    directories: [
      {
        path: 'components/app',
        chunkName: 'app-common'
      },
      {
        path: 'components/cart',
        chunkName: 'cart-common'
      }
    ]
  }
})
