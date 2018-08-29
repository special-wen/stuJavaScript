
    function *f() {
        console.log('执行成功了！')
    }
    var generator = f();
    setTimeout(function () {
        generator.next()
    },2000);
