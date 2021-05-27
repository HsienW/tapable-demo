// const less = require('less');
const SimulationLoader = function (source, map) {
    console.log('===== Simulation Loader =====');
    console.log(map);
    console.log(source);
    return source.replace(/console\.log\(.*\);/g, '');
}

// const SimulationAsyncLoader = function (source) {
//     const callback = this.async();
//     less.render(source, {sourceMap: {}}, function (err, res) {
//         let {css, map} = res;
//         callback(null, css, map);
//     });
// }

// module.exports = SimulationAsyncLoader;
module.exports = SimulationLoader;
