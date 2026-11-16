import type { Config } from 'tailwindcss';

// Level-Select Overworld: a dusk sky ground and four flat inks.
const config = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sky: {
          DEFAULT: '#141C2B',
          deep: '#0F1522',
          raised: '#1B2537',
          line: '#2C3850',
        },
        bone: {
          DEFAULT: '#ECE3CF',
          dim: '#B9B2A2',
          mute: '#8F8A7E',
        },
        moss: '#6E9A73',
        ochre: {
          DEFAULT: '#E3A93B',
          deep: '#C98E22',
        },
        clay: '#C8553D',
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        wrap: '76rem',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
