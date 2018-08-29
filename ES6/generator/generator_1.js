
    function *aa() {
        yield 'hello';
        yield 'world';
        return 'ending';
    }
    var hw = aa();
    console.log(hw.next());
    console.log(hw.next());
    console.log(hw.next());
