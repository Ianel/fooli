/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0096DB",
                secondary: "#AFAFAF",
                accent: "#FF8500",
                darkColor: "#0B0B0C",
                grey: "#F4F4F4",
            },
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [],
};
