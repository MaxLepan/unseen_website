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
                300: '#BDB145',
                400: '#B0A335',
            },
            'black': {
                500: '#242A2B',
            },
            'green': {
                100: '#ebf0e3',
            },
            'transparent': 'transparent',
        },
        fontFamily: {
            'title': ['Rubik', 'sans-serif'],
            'body': ['Nunito', 'sans-serif'],
        }
    },
    plugins: [],
}

