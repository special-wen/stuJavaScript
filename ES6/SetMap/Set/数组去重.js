let arr = [1,2,2,3,3,4,5,2,4]
let array = [...(new Set(arr))];
let array2 = Array.from(new Set(arr));
console.log(array);
console.log(array2);
