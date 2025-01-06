/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 1440,
      exclude: [/\@rainbow-me\/rainbowkit/]
    }
  },
};

export default config;
