// import {SyncHook} from 'tapable';
//
// const hook = new SyncHook();
// hook.tap('logPlugin', () => console.log('hook is work'));
// hook.call();

import {Person} from './component';

/** 最一般的 hooks 使用 **/
const person = new Person();
person.hooks.start.tap('logPlugin', () => console.log('hook is work'));
person.callHook();

/** 傳遞參數的 hooks 使用 **/
person.hooks.parameter.tap('parameter', (hello) => console.log(`${hello} hook is work`));
person.callParameterHook('Hi');

/** 同時註冊多個 event 的 hooks 使用 **/
person.hooks.brake.tap('brakePlugin1', () => console.log('Hi-1'));

// 若是有個需求不管同時註冊多少個 event, 只想執行到 brakePlugin2
// 就可以使用 SyncBailHook, return 非 undefined 的值即可
person.hooks.brake.tap('brakePlugin2', () => {
    console.log('Hi-2')
    return true;
});
person.hooks.brake.tap('brakePlugin3', () => console.log('Hi-3'));

person.callBrakeHook();


/** **/
