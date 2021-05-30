const {getOptions, parseQuery, stringifyRequest,} = require('loader-utils');
const {validate} = require('schema-utils');
const schema = require('./simulation-webpack-loader-schema.json');

// const less = require('less');
const SimulationLoader = function (source, map) {
    console.log('===== Simulation Loader =====');
    console.log(map);
    console.log(source);

    // 透過 getOptions 取得傳入 loader 的參數, 並轉化成 object 方便操作
    const options = getOptions(this);

    // parseQuery 可以將 string 類型的參數轉化成 object 方便操作
    const stringOption = parseQuery('?param1=foo');

    // stringifyRequest 可以將絕對路徑轉化成相對路徑, 避免 import or require 時使用到絕對路徑
    const changePath = stringifyRequest(this, 'test/component/index.js');

    console.log('===== Simulation schema test =====');
    const configuration = {test: 'test-option'};

    // validate 不會有回傳, 所以收到 undefined 表示 option 傳入 type 正常, 若是 error 打包時會接噴錯
    validate(schema, options, configuration);
    console.log(validate(schema, options, configuration));

    console.log('===== Simulation Loader get options =====');
    console.log(options);
    console.log(stringOption);
    console.log(changePath);

    // webpack 預設 loader 編譯過的檔案 or dependency 沒變動時 result 是會有暫存的
    // 目的是為了要因應某些會需要大量編譯的 loader 例如: babel-loader
    // 而 this.cacheable 可以關閉掉預設的暫存機制
    // this.cacheable(false);
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
