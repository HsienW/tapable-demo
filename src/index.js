// import {SyncHook} from 'tapable';
//
// const hook = new SyncHook();
// hook.tap('logPlugin', () => console.log('hook is work'));
// hook.call();

import {Tapable} from './tapable';

/** 最一般的 hooks 使用 **/
const fakeTapable = new Tapable();
fakeTapable.hooks.start.tap('logPlugin', () => console.log('hook is work'));
fakeTapable.callHook();

/** 傳遞參數的 hooks 使用 **/
fakeTapable.hooks.parameter.tap('parameter', (hello) => console.log(`${hello} hook is work`));
fakeTapable.callParameterHook('Hi');

/** 同時註冊多個 event 的 hooks 使用 **/
// 若是有個需求不管同時註冊多少個 event, 只想執行到 brakePlugin2
// 就可以使用 SyncBailHook, return 非 undefined 的值即可
fakeTapable.hooks.brake.tap('brakePlugin1', () => console.log('Hi-1'));
fakeTapable.hooks.brake.tap('brakePlugin2', () => {
    console.log('Hi-2')
    return true;
});
fakeTapable.hooks.brake.tap('brakePlugin3', () => console.log('Hi-3'));
fakeTapable.callBrakeHook();

/** 註冊多個鏈式 event 的 hooks 使用 **/
// 鏈式即是當前 event 的參數是上一個 hook return 的結果
fakeTapable.hooks.waterfall.tap('waterfallPlugin1', (number) => { console.log(number); return number + 1; });
fakeTapable.hooks.waterfall.tap('waterfallPlugin2', (number) => { console.log(number); return number + 2; });
fakeTapable.hooks.waterfall.tap('waterfallPlugin3', (number) => { console.log(number); });
fakeTapable.callWaterfallHook(0);

/** 註冊 loop event 用的 hooks **/
// 若是需要不斷重複執行某種 event 的話可以使用這個
    // return 非 undefined 的值會不斷執行下去, 直到收到 undefined

let index = 0;
fakeTapable.hooks.loop.tap('loopPlugin1', () => {
    console.log('loop-1 start');
    if (index < 5) {
        index++;
        return true;
    }
});

fakeTapable.hooks.loop.tap('loopPlugin2', () => {
    console.log('loop12 start');
});
fakeTapable.callLoopHook();

