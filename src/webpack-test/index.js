import {register} from './fake-src/main';

const userInfo = {
    name: 'test',
    gender: 'male',
}

const testFuncA = function (test) {
    if (test === 'test') {
        console.log('this value is test');
        return true;
    }
    console.log('this value is false');
    return false;
}

const testFuncB = function () {
    console.log('this testFuncB');
    return true;
}

(function () {
    register(userInfo);
})()

export {
    testFuncA,
    testFuncB
}
