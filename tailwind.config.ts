import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        void: '#05070d',
        panel: '#0a1120',
        accent: '#7dd3fc',
        electric: '#a78bfa'
      },
      boxShadow: {
        glow: '0 0 40px rgba(125, 211, 252, 0.2)'
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 20% 20%, rgba(167,139,250,0.18), transparent 45%), radial-gradient(circle at 80% 10%, rgba(125,211,252,0.13), transparent 35%), linear-gradient(180deg, #05070d 0%, #030409 100%)'
      }
    }
  },
  plugins: []
} satisfies Config;
