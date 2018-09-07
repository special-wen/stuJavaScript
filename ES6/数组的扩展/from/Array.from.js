'use strict'
//Array.from 可以将 类似数组的对象和可遍历的对象 转化为真正的数组
let obj = {
    '0':'a',
    '1':'b',
    '2':'c',
    length:3
}
//将obj转化为数组

//es5：
var arr1 = [].slice.call(obj);
console.log(arr1);

//es6:
var arr2 = Array.from(obj);
console.log(arr2);

// 若参数本身就是一个数组，则返回原数组
