module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-rtlcss': {
      mode: 'combined',
      ltrPrefix: '[dir="ltr"]',
      rtlPrefix: '[dir="rtl"]',
    },
  },
};
