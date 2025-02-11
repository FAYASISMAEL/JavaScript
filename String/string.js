// // Using the String object
// const str = new String("Created");
// console.log(str);





// let str = 'java script';
// let b = str.slice(0, 4);

// console.log(b);







// // Define a string variable
// let str = "java script";
// let part = str.substring(0, 4);

// console.log(part);




// // Define a string variable 'str'
// let str = "java script";
// let part = str.substr(5, 6)

// console.log(part);




// // Define a string variable 'str'
// let str = "Dog, Cat, Hen";
// let part = str.replace("Hen", "Horse");

// console.log(part);




// // Define a string variable 'str'
// let str = "Dog, Cat, Hen, Dog";
// let part = str.replaceAll("Dog", "Bird");

// console.log(part);




// let str = 'Dog, Cat';
// // Convert the string 'geeks' to uppercase using the toUpperCase() method
// console.log(str.toUpperCase());





// let str='DOG, CAT';
// // Convert the string 'geeks' to lowercase using the toLowerCase() method
// console.log(str.toLowerCase());






// let str1 = 'Cat';
// let str2 = ' will eats fish';
// console.log(str1.concat(str2));






// let str = ' java ';
// // with removed white spaces
// let newStr = str.trim();
// // Old length
// console.log(str.length);
// // New length
// console.log(newStr.length)






// // Define a string variable
// let str = "  Cat";
// // Use the trimStart() method to remove leading whitespace from the string 'str'
// let part = str.trimStart();
// // Output the original value of the string
// console.log(str);
// // Output the resulting string after removing leading whitespace
// console.log(part);






// let str = 'Cat  '

// let newStr =  str.trimEnd();

// console.log(str.length);

// console.log(newStr.length);






// // Define a string variable
// let str = "world";
// // Use the padStart() method to add padding characters "Mind "
// //to the beginning of the string 'stone'
// str = str.padStart(11, "hello ");
// // Output the resulting string after padding
// console.log(str);







// let str = 'hello';

// str = str.padEnd(11, " world");

// console.log(str);






// let str = "cat";

// console.log(str.charAt(1));







// let str = "Novavi";

// console.log(str.charCodeAt(0))





// let str = "cat-fish";

// console.log(str.split('-'));






// let jsonobj = {Name : "Fayas", Age : 19, Company : "Synnefo"};
// let str = JSON.stringify(jsonobj);
// console.log(str);





let text = "Hello world, Welcome to the world";
let startIndex = ("H");
let endIndex = ("d");

let startCheck = text.startsWith(startIndex);
let endCheck = text.endsWith(endIndex);

if (startCheck && endCheck) {
    console.log("True");
}
else {
    console.log("False");
}