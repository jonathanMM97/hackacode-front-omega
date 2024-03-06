// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Hackacode project by Team Omega',
      meta: [
        { name: 'description', content: 'A iniciative of TODOCODE to promoved the talent of the juniors.' }
      ],
      script: [
        { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'YIGWQKVM', defer: true }
      ]
    },
    baseURL: process.env.BASE_URL ?? '/'
  },
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                @import "./assets/styles/_functions.scss";
                @import "./assets/styles/vars/_vars.scss";
                `
        }
      }
    }
  }
})
