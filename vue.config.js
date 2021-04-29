var path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/taburete-app/'
    : '/',
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/')
      }
    },
  },
};
