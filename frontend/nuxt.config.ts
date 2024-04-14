// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
      head: {
        title: 'SIDO - ICTC',
          "meta": [
            {
              "name": "viewport",
              "content": "width=device-width, initial-scale=1"
            },
            { "charset": "utf-8"}
          ],
          "link": [
            { rel: "icon", type: "image/x-icon", href: "/logo.png" },
          ],
          "style": [],
          "script": [],
          "noscript": []
        }
  },
  runtimeConfig :{
    public: {
      apiBaseUlr: 'http://localhost:3021/public', /// -----Local
      // apiBaseUlr: 'http://41.59.225.216:9050/public', /// -----Live
    }
  },
  modules: [
    // ...
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
})
