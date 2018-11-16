const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: {
        modules:['./js/index.js', "./js/modules/flickrApi.js", "./js/modules/dom.js"]
    },
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
    watch: true,
    plugins: [
        new BrowserSyncPlugin({
          host: 'localhost',
          port: 4200,
          files: ["./dist/*.html", "./dist/*.css"],
          server: { baseDir: ['dist'] }
        })
      ]
  }