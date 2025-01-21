// eslint-disable-next-line @typescript-eslint/no-require-imports
const postcssMediaTransform = require('./postcss-media-transform');

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    'tailwindcss',
    [
      postcssMediaTransform,
      {
        unitToConvert: 'px',
        viewportWidth: 1440,
        exclude: [/\@rainbow-me\/rainbowkit/],
        mediaQuery: [
          {
            pattern: /not all and \(min-width: 768px\)/,
            viewportWidth: 375
          }
        ]
      }
    ]
  ]
};

export default config;
