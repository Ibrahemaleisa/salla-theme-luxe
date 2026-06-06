const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ThemeWatcher = require('@salla.sa/twilight/watcher');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: {
      theme: './src/assets/js/theme.js',
      styles: './src/assets/styles/main.scss',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: '> 0.5%, last 2 versions, not dead' }]],
            },
          },
        },
        {
          test: /\.(scss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['tailwindcss', 'autoprefixer', 'postcss-rtlcss'],
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: { filename: 'fonts/[name][ext]' },
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
          type: 'asset/resource',
          generator: { filename: 'images/[name][ext]' },
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
      ...(isProduction ? [] : [new ThemeWatcher()]),
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({ terserOptions: { compress: { drop_console: true } } }),
        new CssMinimizerPlugin(),
      ],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
};
