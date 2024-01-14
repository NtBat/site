import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-body':
          'linear-gradient(to bottom right, #17171b 0%, #28282f 100%)',
        'gradient-line':
          '-webkit-radial-gradient(right, ellipse farthest-corner, #ddd 0%, rgba(255, 255, 255, 0) 70%)',
        'custom-bg': "url('/bg.jpeg')",
        'gradient-profile':
          'linear-gradient(135deg, rgba(255, 152, 0, 0.4) 0%, rgba(255, 152, 0, 0.01) 100%)',
        'gradient-contact':
          'radial-gradient(ellipse at left, rgba(197, 202, 213, 0.15) 0%,rgba(255, 255, 255, 0) 70%)',
      },
      colors: {
        orange: '#ff9800',
        gray: {
          100: 'rgba(255,255,255,.85)',
          300: 'rgba(255,255,255,.55)',
          500: '#666',
          700: '#31313a',
        },
      },
      screens: {
        'height-700': {
          raw: '(max-height: 700px)',
        },
        'height-740': {
          raw: '(max-height: 740px)',
        },
      },
      boxShadow: {
        custom: '10px 10px 15px rgba(0, 0, 0, 0.1)',
      },
      backgroundColor: {
        'custom-green': 'rgba(46, 202, 127, 0.1)',
      },
      rotate: {
        '-8': '-8deg',
      },
    },
  },
  plugins: [],
}
export default config
