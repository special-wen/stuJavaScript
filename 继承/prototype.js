
    function A() {
        this.a = 'B访问不到我'
    }
    A.prototype.aa = 'B可以访问到我'
    function B() {
        this.b = '我是B'
    }
    B.prototype = A.prototype;
    B.prototype.constructor = B;
    var bb = new B();
    console.log(bb.a);
    console.log(bb.aa);
    console.log(bb.b);
