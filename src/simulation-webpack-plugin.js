export const SimulationWebpackPlugin = function () {
    this.apply = function (tapable) {
        tapable.hooks.asyncParallel.tapPromise('simulationWebpackPlugin', () => {
            return new Promise((resolve, reject) => {
                console.log('simulation Webpack Plugin start');
                setTimeout(() => {
                    console.log('執行 simulation Webpack Plugin');

                    resolve('成功');
                }, 2000);
            });
        });
    }
}
