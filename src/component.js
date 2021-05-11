import { SyncHook, SyncBailHook } from 'tapable';

// Person 相當於一個 Tapable, 負責 event 的定義跟執行
export const Person = function () {
    this.hooks = {
        start: new SyncHook(),
        parameter: new SyncHook(['parameter']),
        brake: new SyncBailHook()
    };

    this.callHook = function () {
        this.hooks.start.call();
    }

    this.callParameterHook = function (parameter) {
        this.hooks.parameter.call(parameter);
    }

    this.callBrakeHook = function () {
        this.hooks.brake.call();
    }
}


