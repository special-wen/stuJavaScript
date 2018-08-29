
    function make () {
        return ()=>{
            console.log(this);
        }
    }
    var testFunc = make.call({ name:'foo' });
    testFunc();
    testFunc.call({ name:'bar' });
