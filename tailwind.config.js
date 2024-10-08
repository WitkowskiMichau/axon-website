"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                primaryYellow: '#fbff12', // Main bright yellow
                darkGray: '#1C1C1E', // Dark gray for background
                warmGray: '#636363', // Neutral gray for text
                paleYellow: '#F8F399', // Soft yellow accent
                navyBlue: '#002855', // Contrasting navy blue
                lightBlue: '#8EC8E8', // Secondary light blue accent
            },
        },
    },
    plugins: [],
};
exports.default = config;
