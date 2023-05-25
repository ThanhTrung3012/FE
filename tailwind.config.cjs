/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontSize: {
                11: '11px !important',
                12: '12px !important',
                13: '13px !important',
                14: '14px !important',
                15: '15px !important',
                16: '16px !important',
                17: '17px !important',
                18: '18px !important',
                19: '19px !important',
                20: '20px !important',
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
