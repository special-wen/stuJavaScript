
    /*
    * 回掉函数
    * */
    function fn1(a,fn2) {
        if (a>10 && typeof fn2 === "function"){
            fn2()
        }
    }
    fn1(11,function () {
        console.log('this is a callback')
    })