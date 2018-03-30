
<div align='center'>
    <h1>Hash-Webpack-Export-Plugin</h1>
    <p>Plugin creation of json files to serve your bundles</p>
</div>

<h2 align="center">Install</h2>

```bash
  npm i --save-dev hash-webpack-export-plugin
```

<h2 align="center">Usage</h2>

**webpack.config.js**
```js
const HtmlWebpackPlugin = require('hash-webpack-export-plugin')

module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
      new HashExportPlugin({
          filename: 'your file name, default `version`',
          outPath: 'your out path, default `__dirname`'  
      })
  ]
}
```

This will generate a file `version.json` containing the following

**version.json**
```
    {
        "previous":"59362f9364ad0dcfce67",
        "current":"59362f9364ad0dcfce67"
    }
```

<h2 align="center">example</h2>

```bash
  npm run example
```
