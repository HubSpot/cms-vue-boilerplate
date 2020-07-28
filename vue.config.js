const CopyWebpackPlugin = require('copy-webpack-plugin');
const HubSpotAutoUploadPlugin = require('@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

const hubspotConfig = ({ portal, autoupload } = {}) => {
  console.log('Portal: ', portal);
  console.log('Autoupload: ', autoupload);
  return {
    // mode: 'production',
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },
    optimization: {
      minimize: false,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]',
          },
        },
      ],
    },
    plugins: [
      // new HubSpotAutoUploadPlugin({
      //   portal,
      //   autoupload,
      //   src: 'dist',
      //   dest: 'cms-vue-boilerplate',
      // }),
      new CopyWebpackPlugin([
        { from: 'src/assets', to: 'assets' },
        {
          from: 'src/modules',
          to: 'modules',
        },
      ]),
    ],
  };
};

module.exports = {
  configureWebpack: config => {
    console.log('config: ', config.module.rules);
    return hubspotConfig(config);
  },
};
