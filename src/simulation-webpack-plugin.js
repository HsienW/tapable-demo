const SimulationWebpackPlugin  = function (option) {
    this.options = option;
}

SimulationWebpackPlugin.prototype.apply = function (compiler) {
    console.log('show options');
    console.log(compiler.options);

    if (compiler.hooks) { // webpack4 +
        compiler.hooks.emit.tapAsync('simulation webpack plugin', function (compilation) {
            console.log('get compilation');
            console.log(compilation);
        })
    } else {
        compiler.plugin('emit', function (compilation, callback) {
            callback()
        })
    }
}

export {
    SimulationWebpackPlugin
}
