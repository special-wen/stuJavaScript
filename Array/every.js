
    /*
   * 接受两个参数
   * - 当前项item，当前项索引index，数组对象array
   * - this作用域对象
   * */
    Array.prototype.makeEvery = function makeEvery(fn,context) {
        if(typeof fn !== "function")
            throw new TypeError('arguments[0] is not a function');
        let arr = this;
        for (let i = 0;i<arr.length;i++){
            let result = fn.call(context,arr[i],i,arr);
            if (!result)
                return false;
        }
        return true;
    }

    let arr = [1,2,3,4,5];
    let aa;
    aa = arr.makeEvery(item=>item>1);
    console.log(aa);
