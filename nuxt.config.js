export default {
  srcDir: "client/",
  head: {
    title: "Countries",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        hid: "gtm-script1",
        src: "https://www.googletagmanager.com/gtag/js?id=id",
        defer: true,
      },
      {
        hid: "gtm-script-2",
        type: "text/javascript",
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());

          gtag('config', 'id');
        `,
      },
    ],
    __dangerouslyDisableSanitizers: ["script"],
  },

  css: [
    "@/assets/styles/bootstrap-grid.min.css",
    "@/assets/styles/fontStyle.scss",
    "@/assets/styles/global.scss",
  ],

  plugins: ["~/plugin/api"],

  components: false,

  buildModules: [
    "@nuxtjs/stylelint-module",
    "@nuxtjs/router",
    "@nuxtjs/color-mode",
    "@nuxtjs/fontawesome",
    "@nuxtjs/google-analytics",
  ],

  modules: ["@nuxtjs/axios", "@nuxtjs/pwa"],

  colorMode: {
    preference: "system",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "color-mode",
  },

  fontawesome: {
    component: "Fa",
    suffix: true,
    icons: {
      solid: ["faSearch", "faChevronDown", "faMoon", "faLongArrowAltLeft"],
      regular: ["faMoon"],
      light: [],
      duotone: [],
      brands: [],
    },
  },

  axios: {
    baseURL: "https://restcountries.com/v2/",
  },

  pwa: {
    manifest: {
      lang: "en",
    },
  },

  build: {},
};
