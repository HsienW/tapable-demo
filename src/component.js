import { SyncHook } from 'tapable';

// Person 相當於一個 Tapable, 負責 event 的定義跟執行
export const Person = function () {
    this.startHook = new SyncHook();
    this.parameterHook = new SyncHook(['parameter']);

    this.callHook = function () {
        this.startHook.call();
    }

    this.callParameterHook = function (parameter) {
        this.parameterHook.call(parameter);
    }
}
