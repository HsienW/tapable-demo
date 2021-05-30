const WebpackBPlugin = function (option) {
    console.log('===== B-Plugin 創建成功 =====');
    console.log(option);
    this.options = option;
}

WebpackBPlugin.prototype.apply = function (compiler) {
    console.log('===== B-Plugin apply call =====');
    compiler.hooks.done.tap('B-Plugin', function (compilation) {
        console.log('----- B-Plugin compilation done -----');
    });
}

module.exports = WebpackBPlugin;
