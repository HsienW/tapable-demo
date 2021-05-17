const SimulationWebpackPlugin  = function (option) {
    this.options = option;
}

SimulationWebpackPlugin.prototype.apply = function (compiler) {
    if (compiler.hooks) { // webpack4 +
        compiler.hooks.emit.tapAsync('simulation webpack plugin', function (compilation) {
        })
    } else {
        compiler.plugin('emit', function (compilation, callback) {
            callback()
        })
    }
}
