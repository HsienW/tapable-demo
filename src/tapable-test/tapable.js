import {
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncParallelBailHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook
} from 'tapable';

// Person 相當於一個 Tapable, 負責 event 的定義跟執行
export const Tapable = function () {
    this.hooks = {
        start: new SyncHook(),
        parameter: new SyncHook(['parameter']),
        brake: new SyncBailHook(),
        waterfall: new SyncWaterfallHook(['parameter']),
        loop: new SyncLoopHook(),
        asyncParallel: new AsyncParallelHook(),
        asyncParallelBail: new AsyncParallelBailHook(),
        asyncSeries: new AsyncSeriesHook(),
        asyncSeriesBail: new AsyncSeriesBailHook(),
        asyncSeriesWaterfall: new AsyncSeriesWaterfallHook(['parameter'])
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

    this.callWaterfallHook = function (parameter) {
        this.hooks.waterfall.call(parameter);
    }

    this.callLoopHook = function () {
        this.hooks.loop.call();
    }

    this.callAsyncParallelHook = function (callBack) {
        this.hooks.asyncParallel.callAsync(callBack);
    }


    this.callAsyncParallelPromiseHook = function () {
        return this.hooks.asyncParallel.promise();
    }

    this.callAsyncParallelBailHook = function (callback) {
        this.hooks.asyncParallelBail.callAsync(callback);
    }

    this.callAsyncSeriesHook = function () {
        return this.hooks.asyncSeries.promise();
    }

    this.callAsyncSeriesBailHook = function () {
        return this.hooks.asyncSeriesBail.promise();
    }

    this.callAsyncSeriesWaterfallHook = function () {
        return this.hooks.asyncSeriesWaterfall.promise();
    }
}


