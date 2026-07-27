/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#05050A',
          card: '#0D0D1A',
          border: 'rgba(255,255,255,0.1)',
        },
        brand: {
          cyan: '#22d3ee',
          purple: '#a855f7',
          pink: '#ec4899',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-cyan-purple-pink': 'linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)',
        'gradient-dark': 'radial-gradient(ellipse at 20% 50%, rgba(168,85,247,0.08) 0%, transparent 60%)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient': 'gradient 6s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.8s ease forwards',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(0.95)' },
        },
        'gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(168,85,247,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(168,85,247,0.4)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(34, 211, 238, 0.15)',
        'glow-purple': '0 0 30px rgba(168, 85, 247, 0.15)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.15)',
        'glow-mixed': '0 0 40px rgba(168, 85, 247, 0.2), 0 0 80px rgba(236, 72, 153, 0.1)',
      },
    },
  },
  plugins: [],
          }
