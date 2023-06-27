/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{html, js, vue}', './*.vue'],
    theme: {
        colors: {
            'primary': '#FEFAF4',
            'beige': {
                100: '#fffcf8',
                200: '#F8F1E4',
                300: '#F4EADC',
                400: '#E5DAC8',
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
                100: '#BFDABA',
            },
            'sapin': {
                100: '#A4C7BA',
            },
            'orange': {
                100: '#EEB67E',
            },
            'transparent': 'transparent',
        },
        fontFamily: {
            'title': ['Rubik', 'sans-serif'],
            'body': ['Nunito', 'sans-serif'],
        },
        extend: {
            zIndex: {
                '15': '15',
            }
        }
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}

