
// let a = [10, 20, 30];
// console.log(a);


// let a = new Array(10,20,30);
// console.log(a); 



// let a = ["html", "css", "js"]
// console.log(a.length);



// let a = ['html','css','js'];
// let s = a.toString();
// console.log(s)



// let a = ['html','css','js'];
// console.log(a.join('|'))



// let a1 = [1,2,3];
// let a2 = [4,5,6];
// let newArray = a1.concat(a2);
// console.log(newArray)



// let a1 = [['1','2'],['3','4'],['5','6']];
// let a2 = a1.flat();
// console.log(a2);



// let a = [10, 20, 30, 40, 50];
// a.push(60);
// a.push(70, 80, 90);
// console.log(a);



// let a = [30,40,50];
// a.unshift(10,20);
// console.log(a)



// let a = [10,20,30,40,50,60]
// a.pop();
// console.log(a)



// let a = [10,20,30,40,50];
// a.shift();
// console.log(a)



// let a = [10,20,30,40,50]
// a.splice(2,1,60);
// console.log(a)



// let a = [1,2,3,4]
// let res = a.slice(1,3)
// console.log(res)



// let a = [1,2,3,4,5];
// a.reverse();
// console.log(a)



const jsonStr = '{"name": "Mohit", "age": 30, "city": "New Delhi"}';
// Convert JSON string into JavaScript object
const obj = JSON.parse(jsonStr);
console.log(obj)

// Accessing JSON data
console.log(obj.name);
console.log(obj.age);
console.log(obj.city);