    /*
    *if代码块的外部使用外层的tmp变量，内部使用内层的tmp变量。
    * 但是，函数f执行后，输出结果为undefined
    * 原因在于变量提升，导致内层的tmp变量覆盖了外层的tmp变量。
    * */
    // var temp = 2;
    // function f() {
    //     console.log(temp);
    //     if (false)
    //         var temp = 'hello world';
    // }
    // f();
    /*
    * 执行完后i并没有消失
    * 泄露成了全局变量
    * */
    // var s = 'hello';
    // for (var i = 0;i<s.length;i++){
    //     console.log(s[i]);
    // }
    // console.log(i);

    function f1() {
        let n = 5;
        if (true){
            let n = 10;
        }
        console.log(n);
    }
    f1();
