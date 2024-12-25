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
            lineHeight: {
                'extra-tight': '0.7',
            },
            colors: {
                primaryYellow: '#fbff12', // Main bright yellow
                lightGray: '#f8f8f8',
                darkBlue: '#111317',
                '90s-blue': '#00BFFF',
                '90s-pink': '#FF69B4',
                'primary-yellow': '#FFD700',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in': 'fade-in 1s ease-out forwards',
            },
        },
    },
    plugins: [],
};
exports.default = config;
