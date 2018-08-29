
    /*
    * promise用途：
    * - 回调地狱，代码难以维护，常常第一个的函数的输出是第二个函数的输入这种现象
    * - promise可以支持多个并发的请求，获取并发请求中的数据
    *
    * promise可以解决异步的问题，但不能说promise是异步的
    *
    * Promise是一个构造函数：
    * 本身的方法：all(),reject(),resolve()
    * 原型上的方法：then(),catch()
    *
    * Promise的构造函数接受一个参数：函数，并且这个函数需要传入的是两个参数
    *  -resolve ：异步操作执行成功后的回调函数
    *  -reject：异步操作执行失败后的回调函数

    * */
    //创建一个promise实例
    let promise = new Promise((resolve, reject) => {
        //...

        //异步操作成功
        if (true){
            resolve(value)
        }else
            reject(error)

    })

    //promise实例生成后，可以使用then方法分别指定resolve状态和rejected状态的回掉函数
    promise.then(value=> {
        //success
    },error=>{
        //failure
    })

