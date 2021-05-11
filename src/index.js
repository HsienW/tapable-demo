// import {SyncHook} from 'tapable';
//
// const hook = new SyncHook();
// hook.tap('logPlugin', () => console.log('hook is work'));
// hook.call();

import {Person} from './component';

const person = new Person();
person.startHook.tap('logPlugin', () => console.log('hook is work'));
person.callHook();

person.parameterHook.tap('parameter', (hello = ['hello']) => console.log(`${hello} hook is work`));
person.callParameterHook();
