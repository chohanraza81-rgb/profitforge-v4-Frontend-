/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: { bg: '#05050A', card: '#0D0D1A', border: 'rgba(255,255,255,0.1)' },
      },
      fontFamily: { sans: ['Inter', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] },
      backgroundImage: {
        'gradient-cyan-purple-pink': 'linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'gradient': 'gradient 6s ease infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.4 } },
        'gradient': { '0%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' }, '100%': { backgroundPosition: '0% 50%' } },
        'float': { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
      },
    },
  },
  plugins: [],
};
