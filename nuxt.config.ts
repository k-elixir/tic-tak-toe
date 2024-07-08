// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Icons+Outlined",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap",
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: ["~/styles/global.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      // disable cssnano when not in production
      cssnano:
        process.env.NODE_ENV === "production"
          ? { preset: ["default", { discardComments: { removeAll: true } }] }
          : false,
    },
  },
});
