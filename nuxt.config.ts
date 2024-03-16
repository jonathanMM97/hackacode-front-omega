export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "nuxt-svgo",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    '@nuxt/ui'
  ],
  i18n: {
    langDir: "i18n/",
    lazy: true,
    locales: [
      {
        code: "en",
        iso: "en",
        name: "EN",
        file: "en.json",
      },
      {
        code: "es",
        iso: "es",
        name: "ES",
        file: "es.json",
      },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: false,
    compilation: {
      strictMessage: false,
    },
  },
  app: {
    head: {
      title: "Hackacode project by Team Omega",
      meta: [
        {
          name: "description",
          content:
            "A iniciative of TODOCODE to promoved the talent of the juniors.",
        },
      ],
      script: [
        {
          src: "https://cdn.usefathom.com/script.js",
          "data-site": "YIGWQKVM",
          defer: true,
        },
      ],
    },
    baseURL: process.env.BASE_URL ?? "/",
  },
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
    {
      path: "~/components/about-us",
      extensions: [".vue"],
    },
    {
      path: "~/components/customers",
      extensions: [".vue"],
    },
    {
      path: "~/components/contact-us",
      extensions: [".vue"],
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                @import "./assets/styles/_functions.scss";
                @import "./assets/styles/vars/_vars.scss";
                `,
        },
      },
    },
  },
});
