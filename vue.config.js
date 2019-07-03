// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-read-more-smooth/" : "/",
  css: {
    extract: false
  },
  configureWebpack: {
    plugins: [
      // new BundleAnalyzerPlugin()
    ]
  }
};
