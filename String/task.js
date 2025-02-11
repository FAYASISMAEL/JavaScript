

// Task 1 //

// function task1(a) {
//     let str=a.trim();
//     console.log(str);
//     console.log(str.toLowerCase());
// }

// let a = "CAT";
// task1(a)



// Task 2 //

// function task2(str,start,end) {
//     if(start<0 || end > str.length || start>end)
//         return "You are Invalid";
//     return str.substring(start,end);
// }

// console.log(task2("You are valid",0,13));



// Task 3 //

// function task3(a,b) {
//     return a.replaceAll(b,"2");
// }

// console.log(task3("Hello","l"));



// Task 4 //

// function task4(str,index) {
//     if(index < 0 || index >= str.length){
//         return "Undefined";
//     }
//     return str[index];
// }

// let text = "it is a school"
// console.log(task4(text,"10"));



// Task 5 //

// // function task5(a, b) {
//     return a.padStart(10, b).padEnd(15, b);  
// }

// console.log(task5("Hello", " "));



// Task 6 //

// function task6(testString) {
//     return testString.split(' '); 
// }

// let testString = "This is a string with multiple words";

// console.log(task6(testString));  



// Task 7 //

// function task7(str){
//     a= str.split(' ');
//     str=""
//     for(let i=0;i<a.length;i++){
//         a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1)
//         str=str+a[i]+" "
//     }
//     str=str.trim()
//     return str
// }
// let str= "This is a string with multiple words"



// console.log(task7(str))



// Task 8 //

// function task8(str,start,end){
//     return str.slice(start,end);
// }



// console.log(task8("This is good",4,10))



// Task 9 //

// function task9(str,a,b){
//     return str.replace(a,b);
// }


// console.log(task9("I Love JS,I know JS","I","python"))



// Task 10

// function getUnicode(str, index) {
//     return str.charCodeAt(index);
// }
// console.log(getUnicode("s", 0));