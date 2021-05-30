const SimulationWebpackFilePlugin = function (option) {
    console.log('===== File Plugin 創建成功 =====');
}

SimulationWebpackFilePlugin.prototype.apply = function (compiler) {
    console.log('===== File Plugin call =====');

    compiler.hooks.emit.tapAsync('fileListPlugin', (compilation, callback)=>{
        let fileList = 'Create build files:\n\n';

        // 使用 for 歷遍 assets 取得全部打包的 filename
        for (let filename in compilation.assets) {
            fileList += '#### ' + filename + '\n';
        }

        // 把 fileList 插入回去 assets 上
        // 每個 assets 屬性都是一個 object, 都具有 source & size 兩個屬性
        compilation.assets['fileList.md'] = {
            source: function() {
                return fileList;
            },
            size: function() {
                return fileList.length;
            }
        };
        // 全部做完之後執行 callback, webpack 就會帶著這個 compilation 結果給下一個 Plugin
        callback();
    })

    compiler.hooks.done.tap('fileListPlugin', function (compilation) {
        console.log('----- fileListPlugin compilation done -----');
    });
}

module.exports = SimulationWebpackFilePlugin;
