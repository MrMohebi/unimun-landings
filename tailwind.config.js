/** @type {import('tailwindcss').Config} */
module.exports = {
    important:true,
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors:{
                'ghadi-bg': '#006B7D',
            }
        },
    },
    plugins: [],
}

