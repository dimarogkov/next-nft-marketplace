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
                red: '#da4934',
            },
        },
    },
    plugins: [require('daisyui')],
};

export default config;
