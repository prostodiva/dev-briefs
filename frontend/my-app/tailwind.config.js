import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                jetbrains: ['"JetBrains Mono"', 'monospace'],
            }
        }
    },
    plugins: [
        scrollbarHide
    ],
}