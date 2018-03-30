
var fs = require('fs')
var path = require('path')

function HashExportPlugin(options) {
  // 使用 options 设置插件实例……
  var concatOptions = options || {}
  this.filename = concatOptions['filename'] || 'version'
  this.outPath = concatOptions['outPath'] || __dirname
}

HashExportPlugin.prototype.apply = function(compiler) {

    var url = this.outPath + '/' + this.filename + '.json'

    compiler.plugin('emit', function(compilation) {

        fs.readFile(url,'utf8',function (err, data) {
                if(err) {
                    return writeFile(url, payload = {
                        previous: null,
                        current: compilation.hash
                    })
                }

                var versionData = JSON.parse(data)
                writeFile(url, {
                    previous: versionData.current,
                    current: compilation.hash
                })
        })
    })
}

function writeFile(url, payload) {
    var data = JSON.stringify(payload)
    fs.writeFile(url, data, function(err) {
        if(err) {
            return console.error('\x1b[41m write error', err)
        }
        console.log('\x1b[32m HashExportPlugin: write file success, write path:' + url)
        console.log('\x1b[32m HashExportPlugin: previous hash: ' + payload.previous)
        console.log('\x1b[32m HashExportPlugin: current hash: ' + payload.current)
    })
}

module.exports = HashExportPlugin
