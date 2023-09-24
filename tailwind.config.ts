import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'xs': '.75rem',   // Extra-small font size
        'sm': '.875rem',  // Small font size
        'base': '1rem',   // Base font size
        'lg': '2rem', // Large font size
        'xl': '2.25rem',  // Extra-large font size
        '2xl': '3.5rem',  // Double extra-large font size
          // Add more custom font sizes if needed
      },
    },
  },
  plugins: [],
}
export default config
