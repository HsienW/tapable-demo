const { RawSource, ConcatSource } = require('webpack-sources')

const SimulationWebpackStringPlugin = function (option) {
    this.options = option;
}

SimulationWebpackStringPlugin.prototype.apply = function (compiler) {
    console.log('===== string call =====');

    compiler.hooks.emit.tap('StringPlugin', (compilation, callback) => {

        let string = `Create by option:${this.options}`;

        for (const asset of Object.keys(compilation['assets'])) {
            // updateAsset 可以修改要輸出的檔案
            compilation.updateAsset(asset, (source) => {
                // 這個是 webpack 用來表示檔案的一個物件
                return new ConcatSource(new RawSource(`/* Hello from plugin */\n ${string}`), source)
            })
        }

        // let string = `Create by option:${this.options}`;
        //
        // for (const asset of Object.keys(compilation['assets'])) {
        //     // updateAsset 可以修改要輸出的檔案
        //     compilation.updateAsset(asset, (source) => {
        //         // 這個是 webpack 用來表示檔案的一個物件
        //         return new ConcatSource(new RawSource('/* Hello from plugin */\n'), source)
        //     })
        // }

        // // 使用 for 歷遍 assets 取得全部打包的 filename
        // for (let file in compilation['assets']) {
        //     string += string + file ;
        // }
        //
        // // 把 fileList 插入回去 assets 上
        // // 每個 assets 屬性都是一個 object, 都具有 source & size 兩個屬性
        // compilation['assets']['file'] = {
        //     source: function() {
        //         return string;
        //     },
        //     size: function() {
        //         return string.length;
        //     }
        // };
        // 全部做完之後執行 callback, webpack 就會帶著這個 compilation 結果給下一個 Plugin
        // callback();
    });
}

module.exports = SimulationWebpackStringPlugin;
