import type { Config } from 'tailwindcss'

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
        fontFamily: {
            default: ['Quantico', 'sans-serif'],
        },

        backgroundImage: {
            'gradient-to-r':
                'linear-gradient(to right, var(--tw-gradient-stops))',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                desktop: '5rem',
                laptopL: '4rem',
                laptop: '3rem',
                tablet: '2rem',
                phoneL: '1.5rem',
                phoneM: '1rem',
                phone: '0.5rem',
            },
            screens: {
                desktop: '2560px',
                laptopL: '1440px',
                laptop: '1024px',
                tablet: '768px',
                phoneL: '425px',
                phoneM: '375px',
                phone: '320px',
            },
        },
        colors: {
            almostBlack: '#1A1A1D',
            grey: '#4E4E50',
            blood: '#6F2232',
            rose: '#950740',
            brown: '#C3073F',
            white: '#FFFFFF',
            black: '#000000',
        },
    },
    plugins: [],
} satisfies Config
