    /*
    * 数组的扩展运算符：...
    * 将一个数组转为用逗号分隔的参数序列。
    *
    *
    * */
    console.log(...[1,2,3,4,[5,6,7]]); //1,2,3,4,[5,6,7]
    console.log([1,2,3,...[2,3,4],3]); //[1,2,3,2,3,4,4]

    /*
    * 替代函数的apply方法
    * */
    function f(x,y,z) {
        console.log(x,y,z)
    }
    var arr = [1,2,3];
    f.apply(null,arr)
    f(...arr)
