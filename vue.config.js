const webpack = require('webpack');

module.exports = {
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