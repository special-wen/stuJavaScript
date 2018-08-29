
    // function timeout(ms) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(resolve,ms,'done')
    //     })
    // }
    // timeout(1000).then((value)=>{
    //     console.log(value)
    // })

    // let prom = new Promise((resolve, reject) => {
    //     console.log('Promise')
    //     reject()
    // })
    // prom.then(()=>{
    //     console.log('resolved.')
    //     })
    //     .catch(()=>{
    //         console.log('error1');
    //     })
    //     .then(()=>{
    //         console.log('resolved!')
    //     })
    //     .catch(()=>{
    //         console.log('error2');
    //     })
    // console.log('Hi')

    let p = new Promise((resolve, reject) => {
        //做一些异步操作
        setTimeout(function(){
            // var num = Math.ceil(Math.random()*10); //生成1-10的随机数
            var num = 6;
            if(num<=5){
                resolve(num);
            }
            else{
                reject('数字太大了');
            }
        }, 2000);
    });
    p.then((data) => {
            console.log('resolved',data);
        })
        .catch((err)=>{
            console.log('reject',err);
            console.log(abc)
        })
        .then((data)=>{
            console.log('resolved!',data);
        },(err)=>{
            console.log(err,'========')
        })
        .catch((err)=>{
            console.log('reject!',err);
        })

    // function toPromise(fn) { return function () { return new Promise(resolve, reject) => { fn((error, data) => { // resolve() // reject() }) }) }}
    function toPomise(fn) {
        return function () {
            return new Promise((resolve, reject) => {
                fn((err,data)=>{
                    resolve();
                    reject();
                })
            })
        }
    }

    function cb2promise(fn) {
        return new Promise((resolve, reject) => {
            resolve();
            reject();
            return fn();
        });
    }