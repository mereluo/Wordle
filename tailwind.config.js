/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/*.{html,js.jsx}", "./src/components/**/*.{html,js,jsx}", "./src/**/*.{html,js,jsx}", "./src/components/**/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                "gray-dark": "#273444",
                gray: "#8492a6",
                "gray-light": "#d3dce6",
            },
        },
    },
    plugins: [],
};
