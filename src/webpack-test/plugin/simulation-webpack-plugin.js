const SimulationWebpackPlugin = function (option) {
    console.log('===== Plugin 創建成功 =====');
    console.log(option);
    this.options = option;
}

SimulationWebpackPlugin.prototype.apply = function (compiler) {
    console.log('===== apply call =====');

    compiler.hooks.run.tapAsync('MyPlugin', (compilation, callback) => {
        console.log('+++++++++ call plugin tapAsync +++++++++');
        console.log(compilation);
        setTimeout(()=>{
            console.log('+++++++++ tapAsync 執行 +++++++++');
            callback()
        }, 2000)
    });

    compiler.hooks.done.tap('MyPlugin', function (compilation) {
        console.log('----- compilation done -----');
    });

    // if (compiler.hooks) { // webpack4 +
    //     compiler.hooks.emit.tapAsync('simulation webpack plugin', function (compilation) {
    //         console.log('get compilation');
    //     })
    // } else {
    //     compiler.plugin('emit', function (compilation, callback) {
    //         callback()
    //     })
    // }
}

module.exports = SimulationWebpackPlugin;
