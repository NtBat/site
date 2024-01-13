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
    },
  },
  plugins: [],
}
export default config
