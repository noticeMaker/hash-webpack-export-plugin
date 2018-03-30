var path = require('path')

var HashExportPlugin = require('hash-webpack-export-plugin')

var config = {
    entry: [
        './main'
    ],
    output: {
        path: path.join(__dirname),
        filename: "bundle.[hash].js"
    },
    plugins: [
        new HashExportPlugin({
            filename: 'version',
            outPath: './'
        })
    ]
}


module.exports = config
