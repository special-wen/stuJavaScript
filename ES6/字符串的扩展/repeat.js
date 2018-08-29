/*
    * repeat:返回一个新字符串，表示原字符串重新出现n次
    * 若参数为0，则什么都没有
    * 若参数为小数，则取整
    * 若参数是负数或者Infinity，会报错
    * 若参数NaN，0到-1之间则视参数为0
    * 若参数是字符串，则会先转换成数字
    * */
    console.log('x'.repeat(3)); //xxx
    console.log('Hello'.repeat(2)); //HelloHello
    console.log('no'.repeat(0)); //
    console.log('no'.repeat('abc')); //
    console.log('no'.repeat(-0.3)); //
