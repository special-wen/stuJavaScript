
    /*
    *  用于判断对象的类型 二元运算符
    *  所以使用instance的都必须是对象
    *  不属于object类型的基本类型都是无法使用instanceof的，或者无法返回期望的答案
    * */
    console.log(1 instanceof Number)   //false
    console.log(new Number(1) instanceof Number ) //true
