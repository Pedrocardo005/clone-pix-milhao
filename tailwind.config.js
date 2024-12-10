/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'custom-gradient': 'linear-gradient(450deg, #000 0%, #454545 100%)',
                'button-buy-gradient': 'linear-gradient(90deg, #008a20 0%, #a2dfad 100%)',
            }
        },
    },
    plugins: [],
}