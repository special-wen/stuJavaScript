var s1 = '6 3';
var s2 = '7 1 2 2 5 9';

// s2[0] s2[1] s2[2]
// 0 1+2


var arr1 = s1.split(' ');
var n = parseInt(arr1[0]);
var m = parseInt(arr1[1]);

var arr2 = s2.split(' ');
var new_arr1 = [];
arr2.map(item=>{
    new_arr1.push(parseInt(item));
})

for (var i = 0;i<m;i++){
    var min = Math.min(...new_arr1);
    var tag = new_arr1.indexOf(min);
    if (tag === 0){
        var tmp = tag + 1;
    }else if (tag === new_arr1.length-1){
        var tmp = tag - 1;
    }else {
        if(new_arr1[tag-1] > new_arr1[tag+1]){
            var tmp = tag-1;
        }else {
            var tmp = tag+1;
        }
    }
    var temp = new_arr1[tag]+new_arr1[tmp];
    new_arr1.splice(tag,1);
    if (tag < tmp){
        new_arr1[tmp-1] = temp;
    }else{
        new_arr1[tmp] =temp;
    }
    console.log(new_arr1);
}
console.log(Math.min(...new_arr1));

