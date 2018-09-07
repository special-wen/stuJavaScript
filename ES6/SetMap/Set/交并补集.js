let a = new Set([1,2,3,4]);
let b = new Set([2,3,0,5,7]);

//并集
console.log(new Set([...a,...b]))

//交集
console.log(new Set([...a].filter(item=>b.has(item))))

//补集
