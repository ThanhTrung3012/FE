/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontSize: {
                12: '12px !important',
                13: '13px !important',
                14: '14px !important'
            },
            fontWeight: {
                bold: 'bold !important',
                semibold: '600 !important'
            },
            boxShadow: {
                '3xl': '-26px -7px 29px -14px rgba(0,0,0,0.7)'
            }
        }
    },
    plugins: []
};
