
    var name = 'This is window;'
    var obj = {
        name : 'My object',
        getNameFun: function () {
            console.log(this,'-------')
            return function () {
                console.log(this,'========')
                return this.name
            }
        }
    }
    alert(obj.getNameFun()())
