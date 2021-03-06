
    /*
    *
    * instanceof 主要的实现原理就是只要右边变量的 prototype 在左边变量的原型链上即可。
    * 因此，instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype，
    * 如果查找失败，则会返回 false，告诉我们左边变量并非是右边变量的实例。
    * */
    function F() {
        name:'abc'
    }
    function B() {
        age:'123'
    }
    var f = new F();
    Object.prototype.newInstanceOF = function (parent) {
        let rightPrototype = parent.prototype;
        let leftPrototype = this.__proto__;
        while (1){
            if (leftPrototype === null){
                return false;
            }
            if (leftPrototype === rightPrototype){
                return true;
            }
            leftPrototype = leftPrototype.__proto__
        }

    }
    console.log(f.newInstanceOF(B))
