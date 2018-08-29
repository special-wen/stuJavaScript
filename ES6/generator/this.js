
    // function *g() {}
    // g.prototype.hello = function () {
    //     return 'hi'
    // }
    // let obj = g();
    // console.log(obj instanceof g)
    // console.log(obj.hello())
    
    function *g() {
        this.hello = 'hi'
    }
    let obj = g();
    obj.next();
    console.log(obj.hello)