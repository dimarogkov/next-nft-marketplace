import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                black: '#2b2b2b',
                gray: '#3b3b3b',
                gray2: 'rgb(255 255 255 / 65%)',
                white: '#fff',
                purple: '#a259ff',
                green: '#00ac4f',
                yellow: 'oklch(76.9% 0.188 70.08)',
                red: '#da4934',
            },
            animation: {
                enter: 'enter 0.2s forwards',
                leave: 'leave 0.2s forwards',
            },
            keyframes: {
                enter: {
                    '0%': { opacity: '0', visibility: 'hidden', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', visibility: 'visible', transform: 'translateY(0)' },
                },
                leave: {
                    '0%': { opacity: '1', visibility: 'visible', transform: 'translateY(0)' },
                    '100%': { opacity: '0', visibility: 'hidden', transform: 'translateY(20px)' },
                },
            },
        },
    },
    plugins: [require('daisyui')],
};

export default config;
