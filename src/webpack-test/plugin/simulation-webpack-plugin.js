const SimulationWebpackPlugin  = function (option) {
    this.options = option;
}

SimulationWebpackPlugin.prototype.apply = function (compiler) {
    console.log('成功進入');

    if (compiler.hooks) { // webpack4 +
        compiler.hooks.emit.tapAsync('simulation webpack plugin', function (compilation) {
            console.log('get compilation');
        })
    } else {
        compiler.plugin('emit', function (compilation, callback) {
            callback()
        })
    }
}

module.exports = SimulationWebpackPlugin;
