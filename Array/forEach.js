
    //forEach
    /*
    * 1.无返回值
    * 2.为一些相同的元素绑定时间处理器
    * 3.原则上不会修改数组的值，但是可以通过自己本身的索引项进行改变，控制数组发生变化
    *
    * */
    //原生实现forEach
    /*
    * 接受两个个参数：
    *  - 数组当前项item，当前索引项index，原始数组in
    *  - this作用域的对象
    * */
    Array.prototype.makeForEach = function makeForEach(fn,context) {
        if (typeof fn !== "function")
            throw new TypeError('arguments[0] is not a function');
        let arr = this;
        let temp = [];
        for (let i = 0;i<arr.length;i++){
            let result = fn.call(context,arr[i],i,arr)
            temp.push(arr[i])
        }
        return temp
    }
    let arr = [1,2,3,4];
    console.log(arr.makeForEach(item=> console.log(item)))
