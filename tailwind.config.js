/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#0f172a',
        },
      },
      boxShadow: {
        glow: '0 24px 90px rgba(37, 99, 235, 0.22)',
        card: '0 18px 60px rgba(15, 23, 42, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(28px,-36px,0) scale(1.08)' },
          '66%': { transform: 'translate3d(-24px,20px,0) scale(0.96)' },
        },
        grid: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '64px 64px' },
        },
        particle: {
          from: { transform: 'translate3d(0, 24px, 0)', opacity: '0.15' },
          '50%': { opacity: '0.65' },
          to: { transform: 'translate3d(0, -120vh, 0)', opacity: '0' },
        },
        ray: {
          '0%, 100%': { opacity: '0.12', transform: 'rotate(12deg) translateX(-8%)' },
          '50%': { opacity: '0.28', transform: 'rotate(12deg) translateX(8%)' },
        },
        shine: {
          from: { transform: 'translateX(-120%) skewX(-18deg)' },
          to: { transform: 'translateX(220%) skewX(-18deg)' },
        },
      },
      animation: {
        blob: 'blob 16s ease-in-out infinite',
        grid: 'grid 22s linear infinite',
        ray: 'ray 9s ease-in-out infinite',
        shine: 'shine 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
