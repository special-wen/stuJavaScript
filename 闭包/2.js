    var name = 'this is window';
    var obj = {
        name:'this is obj',
        getNameFun:function () {
            var that = this;
            return function () {
                return that.name
            }
        }
    }
    alert(obj.getNameFun()())
