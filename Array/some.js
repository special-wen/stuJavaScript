

    Array.prototype.makeSome = function makeSome(fn,context) {
        if (typeof fn !== "function")
            throw new TypeError('arguments[0] is not a function');
        let arr = this;
        let temp = [];
        for (let i = 0;i<arr.length;i++){
            let result = fn.call(context,arr[i],i,arr);
            if (result)
                return true
        }
        return false
    }
    let arr = [1,2,3,4,5];
    let aa;
    aa = arr.makeSome(item=>item>9)
    console.log(aa)
