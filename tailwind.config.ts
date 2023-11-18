import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'primary-accent': 'var(--primary-accent)',
        'error':'var(--error)',
        'primary-hover':'var(--primary-hover)',
        'secondary-hover':'var(--secondary-hover)',
      },
    },
  },
  plugins: [],
}
export default config
