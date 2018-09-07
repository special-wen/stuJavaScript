/*
* 新的数据结构Set，属于类数组，但成员的值是唯一的
*
*
* */
var s = new Set();
[1,2,3,4,5,5,2,5,5].forEach(item=>s.add(item));
for (let i of s){
    console.log(i);
}

/*
* Set实例的属性和方法：
*   属性：
*       - Set.prototype.constructor：构造函数，默认就是Set函数。
*       - Set.prototype.size：返回Set实例的成员总数。
*   方法：
*       - add(value):添加某个值，返回Set结构本身
*       - delete(value):删除某个值，返回一个布尔值，表示是否删除成功
*       - has(value):返回一个布尔值，表示该值是否为Set成员
*       - clear(value):清除所有成员，没有返回值
* */
var set = new Set();
set.add(1);
set.add(2);
set.add(2);
console.log(set); // 1,2
console.log(set.size); //2
console.log(set.has(1)); // true
console.log(set.has(2)); // true
console.log(set.has(3)); // false
console.log(set.delete(2)); // true
set.clear();
console.log(set.has(2)); // false
console.log(set.has(1)); // false

/*
* Array.from 方法可以将Set结构化改为数组
*
* */

let newSet = new Set([1,2,2,3,4,5]);
console.log(newSet);
let arr = Array.from(newSet);
console.log(arr);