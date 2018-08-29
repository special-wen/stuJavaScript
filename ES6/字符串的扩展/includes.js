
    //返回布尔值，表示是否找到了参数字符串
    // 支持参数是字符串

    let s = 'Hello world';
    console.log(s.includes('H')); //true
    console.log(s.includes('Hello')); // true
    console.log(s.includes('h')); //false
    console.log(s.includes(' ')); //true
    console.log(s.includes(',')); //false