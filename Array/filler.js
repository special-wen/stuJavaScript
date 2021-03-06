 /*
    * 接受两个参数
    *   - 每一项执行的函数(数组值，下标，数组本身)
    *   - this的作用域对象
    * */

    Array.prototype.makeFilter = function makeFilter(fn,context) {
        if (typeof fn !== "function")
            throw new TypeError('arguments[0] is not a function');
        let arr = this;
        let temp = [];
        for (let i = 0;i<arr.length;i++){
            let result = fn.call(context,arr[i],i,arr);
            if (result)
                temp.push(arr[i]);
        }
        return temp

    }
    let arr = [1,2,3,4,5];
    let aa;
    aa = arr.makeFilter((item)=> item > 2)
    console.log(aa)
