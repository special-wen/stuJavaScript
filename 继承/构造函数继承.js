    /*
    * 构造函数继承
    * 通过call，apply调用。将this指向变成thisArg
    * */
function Test1() {
    this.a = 'test1';
    console.log(this.a);
    console.log(this);
}
function Test2() {
    Test1.apply(this);
}
var test = new Test2();

