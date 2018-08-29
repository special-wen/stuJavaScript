
    Array.prototype.makeMap = function makeMap(fn,context) {
        if (typeof fn !== "function"){
            throw new TypeError('arguments[0] is not a function');
        }
        let arr = this;
        let temp = [];
        for (let i = 0;i<arr.length;i++){
            let result = fn.call(context,arr[i],i,arr);
            temp.push(result);
        }
        return temp;
    }
    let arr = ['x','y','z'];

    let obj = {a:1};

    arr.makeMap((item,index)=>{
        console.log(item,index)
    })

    arr.makeMap(function () {
        console.log(this.a)
        return this.a
    },obj)
