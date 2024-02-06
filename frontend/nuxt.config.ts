// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
      head: {
        title: 'ICT Commission',
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
  modules: [
    // ...
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
})
