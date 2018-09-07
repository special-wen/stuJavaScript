let m = new Map();
let o = {p:'hello world'};
m.set(o,'content');
console.log(m.get(o)); // 'content'
console.log(m.has(o)); // 'true'
console.log(m.delete(o)); // 'true'
console.log(m.has(o)); // 'false'


let map = new Map([
    ['name','zxw'],
    ['title','author']
]);

console.log(map.size)
console.log(map.has('name'))