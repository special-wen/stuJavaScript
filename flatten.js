const input = {
    a:1,
    b:[1,2,{c:true},[3]],
    d:{e:2,f:3},
    g:null
}
let obj = {};
let index;
function flatten(input) {
    // input.map((key,value)=>{
    //     console.log(key,value)
    // })
    for (let key in input){
        let value = input[key];
        obj = aa(key,value)
    }
    return obj;

}
function aa(key,value){
    let object = {};
    index = key;
    if (typeof value === "object"){
        if (Array.isArray(value)){
            index = new Array();
            for (let i in value){
                index.push(value[i])
            }
        }
        // aa(key,value)
    }else{
        object[key] = value;
    }
    return object;
}
console.log(flatten(input))
console.log(index)
//{
//  "a":1,
//  "b[0]":1,
//  "b[1]":2,
//  "b[2].c":true,
//  "b[3][0]":3,
//  "d.e":2,
//  "d.f":3

// }