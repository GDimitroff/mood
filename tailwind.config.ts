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
        pastelPink: '#fddde6',
        pastelGreen: '#ccf2f4',
        pastelBlue: '#a6c1ee',
        pastelYellow: '#fdfd96',
      },
    },
  },
  plugins: [],
}
export default config
