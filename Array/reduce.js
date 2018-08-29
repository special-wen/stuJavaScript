
    Array.prototype.makeReduce = function makeReduce(fn,context) {
        if (typeof fn !== "function")
            throw new TypeError('arguments[0] is not a function');
        let array = this;
        let arr  = array.slice()
        if (context)
            arr.unshift(context)
        let index;
        while (arr.length >2 ){
            let newValue = fn(arr[0],arr[1],index,array);
            index = array.length - arr.length + 1;
            arr.splice(0,2);
            arr.unshift(newValue);
        }
        index += 1;
        let result = fn(arr[0],arr[1],index,array);
        return result;
    }

    let arr = [1, 2, 3, 4, 5];
    let sum = arr.makeReduce((prev, cur, index, arr) => {
        return prev * cur;
    },10);

    console.log(sum);

    let array = [1,2,3,4,5];
    let array_sum = array.reduce((pre,cur)=>{
        return pre*cur
    },10)
    console.log(array_sum)
