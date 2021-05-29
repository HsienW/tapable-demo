import {component} from './component';

const register = function (userInfo) {
    console.log('===== Register =====');
    return component(userInfo['gender']);
}

export {
    register
}
