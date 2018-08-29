    var a = 'this is window'
    function test() {
        var b = 'this is test'
        function test2() {
            var c = 'this is test3'
            console.log(a)
            console.log(b)
            console.log(c)
        }
        test2()
    }
    test()
