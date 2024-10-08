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
            boxShadow: {
                'top': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
            },
            fontFamily: {
                jost: ['Jost', 'sans-serif'],
                russo: ['Russo One', 'sans-serif'],
            },
            colors: {
                primaryYellow: '#fbff12', // Main bright yellow
                lightGray: '#f8f8f8',
                darkBlue: '#111317'
            },
        },
    },
    plugins: [],
};
exports.default = config;
