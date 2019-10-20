var createNwbWebpackConfig = require('create-nwb-webpack-config');

var config = createNwbWebpackConfig();

// delete config.optimization;

config.module.rules.push({
  test: /\.s[ac]ss$/,
  use: ['css-loader', 'sass-loader'],
});

module.exports = {
  webpackConfig: config,
  components: 'src/**/[A-Z]*.js'
};