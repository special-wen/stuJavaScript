
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
