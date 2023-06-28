// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@nuxtjs/google-fonts',
    ],
    i18n: {
        vueI18n: './i18n.config.ts'
    },
    googleFonts: {
        display: 'swap',
        families: {
            'Rubik': true,
            'Nunito': true,
        }
    },
})
