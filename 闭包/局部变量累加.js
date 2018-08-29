    function outPut() {
        var x = 10;
        return function () {
            x++;
            alert(x);
        }
    }
    var y = outPut();
    y();
    y();
