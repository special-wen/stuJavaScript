    function test () {
        for (var i = 0;i<4;i++){
            setTimeout(function () {
                console.log(i)
            },0)
        }
    }
    //使用闭包讲上代码更改为输出0，1，2，3
    function aa (){
        for (var i = 0;i<4;i++){
            (function (e) {
                setTimeout(function () {
                    console.log(e)
                },1000)
            })(i)
        }
    }
    test();
    aa();
