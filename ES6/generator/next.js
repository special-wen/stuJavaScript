
    function *f() {
        for (var i = 0;true;i++){
            var result = yield i;
            if (result){
                 i = -1
            }
        }
    }
    var g = f();
    console.log(g.next());
    console.log(g.next());
    console.log(g.next(true));
