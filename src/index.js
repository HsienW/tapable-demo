// import {SyncHook} from 'tapable';
//
// const hook = new SyncHook();
// hook.tap('logPlugin', () => console.log('hook is work'));
// hook.call();

import {Tapable} from './tapable';

/** 最一般的 hooks 使用 **/
const fakeTapable = new Tapable();

// fakeTapable.hooks.start.tap('logPlugin', () => console.log('hook is work'));
// fakeTapable.callHook();
//
// /** 傳遞參數的 hooks 使用 **/
// fakeTapable.hooks.parameter.tap('parameter', (hello) => console.log(`${hello} hook is work`));
// fakeTapable.callParameterHook('Hi');
//
// /** 同時註冊多個 event 的 hooks 使用 **/
// // 若是有個需求不管同時註冊多少個 event, 只想執行到 brakePlugin2
// // 就可以使用 SyncBailHook, return 非 undefined 的值即可
// fakeTapable.hooks.brake.tap('brakePlugin1', () => console.log('Hi-1'));
// fakeTapable.hooks.brake.tap('brakePlugin2', () => {
//     console.log('Hi-2')
//     return true;
// });
// fakeTapable.hooks.brake.tap('brakePlugin3', () => console.log('Hi-3'));
// fakeTapable.callBrakeHook();
//
// /** 註冊多個鏈式(waterfall) event 的 hooks 使用 **/
// // 鏈式即是當前 event 的參數是上一個 hook return 的結果
// fakeTapable.hooks.waterfall.tap('waterfallPlugin1', (number) => { console.log(number); return number + 1; });
// fakeTapable.hooks.waterfall.tap('waterfallPlugin2', (number) => { console.log(number); return number + 2; });
// fakeTapable.hooks.waterfall.tap('waterfallPlugin3', (number) => { console.log(number); });
// fakeTapable.callWaterfallHook(0);
//
// /** 註冊 loop event 用的 hooks **/
// // 若是需要不斷重複執行某種 event 的話可以使用這個
//     // return 非 undefined 的值會不斷執行下去, 直到收到 undefined
//
// let index = 0;
// fakeTapable.hooks.loop.tap('loopPlugin1', () => {
//     console.log('loop-1 start');
//     if (index < 5) {
//         index++;
//         return true;
//     }
// });
//
// fakeTapable.hooks.loop.tap('loopPlugin2', () => {
//     console.log('loop12 start');
// });
// fakeTapable.callLoopHook();
//
// /** 遇到使用並行的非同步 event 時用的 hooks **/
// fakeTapable.hooks.asyncParallel.tapAsync('asyncParallelPlugin1', (callback) => {
//     console.log('async Parallel Plugin1 start');
//     setTimeout(() => {
//         console.log('執行 async Parallel Plugin1');
//         callback();
//     }, 3000);
// });
//
// fakeTapable.hooks.asyncParallel.tapAsync('asyncParallelPlugin2', (callback) => {
//     console.log('async Parallel Plugin2 start');
//     setTimeout(() => {
//         console.log('執行 async Parallel Plugin2');
//         callback();
//     }, 5000);
// });
// // final callback 會在全部非同步都執行完之後, 最後在執行
// fakeTapable.callAsyncParallelHook(() => { console.log('final callback is work'); });
//
// fakeTapable.callAsyncParallelPromiseHook('asyncParallelPromise', () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('執行 async Parallel Promise');
//             resolve();
//         }, 2000);
//     })
// });
//
// fakeTapable.callAsyncParallelPromiseHook().then(() => { console.log('我是 promise 的 callback'); });
//
// /** 不需等待全部並行的非同步 event 執行完的 hooks **/
// fakeTapable.hooks.asyncParallelBail.tapAsync('asyncParallelBailPlugin1', (callback) => {
//     console.log('async Parallel Bail Plugin1 start');
//     setTimeout(() => {
//         console.log('執行 async Parallel Bail Plugin1');
//         callback(null ,1);
//     }, 1500);
// });
//
// fakeTapable.hooks.asyncParallelBail.tapAsync('asyncParallelBailPlugin1', (callback) => {
//     console.log('async Parallel Bail Plugin2 start');
//     setTimeout(() => {
//         console.log('執行 async Parallel Bail Plugin2');
//         callback();
//     }, 9500);
// });
//
// fakeTapable.callAsyncParallelBailHook(() => { console.log('final callback 會在 Plugin1 結束前就執行'); });


// /** 串行非同步 event 執行的 hooks **/
// // 一定會等前面註冊的 event 執行完在往下走
// fakeTapable.hooks.asyncSeries.tapPromise('asyncSeriesPlugin1', () => {
//     return new Promise((resolve, reject) => {
//         console.log('async Series Plugin1 start');
//         setTimeout(() => {
//             console.log('執行 async Series Plugin1');
//             resolve();
//         }, 2500);
//     });
// });
//
// fakeTapable.hooks.asyncSeries.tapPromise('asyncSeriesPlugin2', () => {
//     return new Promise((resolve, reject) => {
//         console.log('async Series Plugin2 start');
//         setTimeout(() => {
//             console.log('執行 async Series Plugin2');
//             resolve();
//         }, 7500);
//     });
// });
//
// fakeTapable.hooks.asyncSeries.tapPromise('asyncSeriesPlugin3', () => {
//     return new Promise((resolve, reject) => {
//         console.log('async Series Plugin3 start');
//         setTimeout(() => {
//             console.log('執行 async Series Plugin3');
//             resolve();
//         }, 500);
//     });
// });
//
// fakeTapable.callAsyncSeriesHook().then(() => { console.log('final callback'); });

/** 串行非同步 event 執行的 hooks **/
// 全部註冊的串行 event 中有一個執行完, 回傳不為 undefined 就立刻執行 final callback, 不會再執行後面的 event

fakeTapable.hooks.asyncSeriesBail.tapPromise('asyncSeriesBailPlugin1', () => {
    return new Promise((resolve, reject) => {
        console.log('async Series Bail Plugin1 start');
        setTimeout(() => {
            console.log('執行 async Series Bail Plugin1');
            resolve(undefined);
        }, 8000);
    });
});

fakeTapable.hooks.asyncSeriesBail.tapPromise('asyncSeriesBailPlugin2', () => {
    return new Promise((resolve, reject) => {
        console.log('async Series Bail Plugin2 start');
        setTimeout(() => {
            console.log('執行 async Series Bail Plugin2');
            resolve(true);
        }, 1000);
    });
});

// fakeTapable.callAsyncSeriesBailHook().then(() => { console.log('final callback'); });


/** 註冊多個非同步鏈式(waterfall) event 的 hooks 使用 **/
fakeTapable.hooks.asyncSeriesWaterfall.tapPromise('asyncSeriesWaterfallPlugin1', (result) => {
    return new Promise((resolve, reject) => {
        console.log('async Series Waterfall Plugin1 start');
        setTimeout(() => {
            console.log('執行 async Series Bail Plugin1', result);
            resolve(true);
        }, 3000);
    });
});

fakeTapable.hooks.asyncSeriesWaterfall.tapPromise('asyncSeriesWaterfallPlugin2', (result) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('執行 async Series Bail Plugin2', result);
            resolve(false);
        }, 6000);
    });
});

fakeTapable.callAsyncSeriesWaterfallHook().then(() => { console.log('final callback'); });
