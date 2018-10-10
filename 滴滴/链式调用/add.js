
var Sub = function(initValue){
    //begin
    this.result = initValue;
    //end
};
Sub.prototype.add = function(a){
    if (!isNaN(a)){
        this.result +=a;
    }else{
        this.reult +=0;
    }
    return this;
}
Sub.prototype.getResult = function(){
    return this.result;
}
var s = read_line()
print(eval(s))

var a = new Sub(0).add(1).add(3).add(10).getResult();
console.log(eval(a));