/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'gradient-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        // 🔴 Removed glow to eliminate shadow
        wiggle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        sparkle: 'sparkle 3s ease-in-out infinite',
        'gradient-move': 'gradient-move 6s ease-in-out infinite',
        // 🔴 Removed glow animation
        wiggle: 'wiggle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
