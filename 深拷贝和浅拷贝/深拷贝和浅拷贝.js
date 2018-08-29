/*
    *
    * 浅拷贝
    *   系统也会自动为新的变量在栈内存中分配一个值，但这个值仅仅是一个地址。
    *   也就是说，复制出来的变量和原有的变量具有相同的地址值，指向堆内存中的同一个对象。
    *   所以说改变一个，另一个也会发生改变
    * */
var arr1 = [1,2,3];
var arr2 = arr1;
arr2[0] = 2;
console.log(arr1);
console.log(arr2);
/*
* 深拷贝
*
* */
function deepClone(arr) {
    //判断是否是数组或对象
    let newArray = Array.isArray(arr)?[]:{};
    //判断arr对象是否是数组或对象其是否为空
    if (arr && typeof arr === 'object'){
        for (let item in arr){
            if (arr[item] && typeof arr[item] ==='object'){
                newArray[item] = deepClone(arr[item]);
            }else{
                newArray[item] = arr[item];
            }
        }
    }
    return newArray;
}
var array1 = [1,2,3,4,[5,6,7],9];
var array2 = deepClone(array1);
array2[0] = 0;
array2[4][1] = [2,3,4];
console.log(array1);
console.log(array2);

//但是slice和concat只能操作一维数组
//使用slice方法：
var array3 = [1,2,3,4,[5,6,7],9];
var array4 = array3.slice(0);
array4[0] = 3;
array4[4] = [5,6];
console.log(array3);
console.log(array4);

//使用concat方法：
var array5 = [1,2,3,4,[5,6,7],9];
var array6 = array5.concat();
array5[0] = 3;
array5[4][1] = [1,2,3,4];
console.log(array5);
console.log(array6);
