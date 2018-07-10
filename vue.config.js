const webpack = require('webpack');

module.exports = {
  devServer: {
    port: 8099
  },
  configureWebpack: () => ({
    module: {

    },
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill',
        'Quill': 'quill/dist/quill.js'
      })
    ]
  })
}