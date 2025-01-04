/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 1440
    }
  },
};

export default config;
