import {getOptions} from 'loader-utils';

// const SimulationAsyncLoader = function (source) {
//
//     console.log(this);
//     const callback = this.async();
//     less.render(source, {sourceMap: {}}, function (err, res) {
//         let {css, map} = res;
//         callback(null, css, map);
//     });
// }

async function SimulationAsyncLoader(content) {
    console.log('123456');
    return content
}

module.exports = SimulationAsyncLoader;
