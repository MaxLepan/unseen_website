/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{html, js, vue}', './*.vue'],
    theme: {
        colors: {
            'primary': '#FEFAF4',
            'beige': {
                100: '#FEFAF4',
                200: '#F8F1E4',
            },
            'olive': {
                200: '#D2C65E',
            },
            'black': {
                500: '#242A2B',
            },
        },
        fontFamily: {
            'title': ['Rubik', 'sans-serif'],
            'body': ['Nunito', 'sans-serif'],
        }
    },
    plugins: [],
}

