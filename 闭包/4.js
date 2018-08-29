    function foo(x) {
        var temp = 3;
        return function (y) {
            alert(x+y+(++temp));
        }
    }
    var bar = foo(2);
    bar(10)
