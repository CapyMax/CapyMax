


/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    "tailwindcss",
    [
      require.resolve("./postcss-media-transform"),
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

module.exports = config;