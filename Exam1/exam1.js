// q1 //

// function addAndCheck(number1, number2) {
    
//     let sum = number1 + number2;

//     if (sum > 100) {

//       return "Limit Exceeded";
//     } else {
//       return sum;
//     }
//   }
//   let result1 = addAndCheck(80, 30);
//   console.log(result1);

// q1 //


// q2 //

// function areEqual(num1, num2) {
//   if (typeof num1 !== typeof num2) {
//     return false; 
//   }
//   if (typeof num1 === 'number') { 
//     return (num1 - num2 === 0);
//   }
//   return num1.toString() === num2.toString();
// }
// console.log(areEqual(10, 10));




// function equal(a,b){
//   if(typeof a !== typeof b){
//     return false;
//   }
//   else{
//     return a.toString() === b.toString();
//   }
// }
// console.log(equal(10,10));

// q2 //


// q3 //

// function swap(a, b) {
//   a = a + b;  
//   b = a - b;  
//   return [a, b];
// }
// let p = "hello";
// let q = "world";
// [p, q] = [q, p]
// console.log(p, q); 

// q3 //


// q4 //

// function EvenOrOdd(number) {
//   if (number & 1) {  
//     return "Odd";
//   } else {         
//     return "Even";
//   }
// }
// console.log(EvenOrOdd(4));  
// console.log(EvenOrOdd(7)); 

// q4 //


// q5 //

// function checkNumber(number) {
//   return number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
// }

// console.log(checkNumber(5));
// console.log(checkNumber(0));
// console.log(checkNumber(-5));

// q5 //


// q6 //

// function btAND(num1, num2) {
//   return num1 & num2;
// }
// console.log(btAND(5, 3));
// console.log(btAND(2,1));

// q6 //


// q7 //

// function power(n) {
//   return (n > 0) && ((n & (n - 1)) === 0);
// }

// console.log(power(4));

// q7 //


// q8 //


// q8 //


// q9 //

// function numbers(numbers) {
//   const posNumbers = numbers.filter(number => number > 0);
//   return posNumbers.reduce((num1, num2) => num1 + num2, 0);
// }

// const numbers1 = [2, -8, 5, -2, 6];
// console.log(numbers(numbers1)); 

// q9 //


// q10 //


// q10 //


// q11 //

// function age(age) {
//   if (age < 13) {
//     return "Child";
//   } else if (age >= 13 && age <= 19) {
//     return "Teenager";
//   } else if (age >= 20 && age <= 64) {
//     return "Adult";
//   } else { 
//     return "Senior";
//   }
// }

// console.log(age(10));
// console.log(age(15));
// console.log(age(45));
// console.log(age(70));

// q11 //


// q12 //

// function leapYear(year) {
//   if (year % 4 == 0) {
//         return true;
//       } 
//       else {
//         return false;
//       }
//     } 

// console.log(leapYear(2024));
// console.log(leapYear(2023));

// q12 //


// q13 //

// function findLargestNumber(num1, num2, num3) {
//   if (num1 >= num2 && num1 >= num3) {
//     return num1;
//   } else if (num2 >= num1 && num2 >= num3) {
//     return num2;
//   } else {
//     return num3;
//   }
// }

// console.log(findLargestNumber(80, 35, 150));

// q13 //


// q14 //

// function calculateGrade(percentage) {
//   if (percentage < 0 || percentage > 100) {
//     return "Invalid percentage.";
//   }
//   if (percentage >= 90) {
//     return "A";
//   } else if (percentage >= 80) {
//     return "B";
//   } else if (percentage >= 70) {
//     return "C";
//   } else if (percentage >= 60) {
//     return "D";
//   } else { 
//     return "F";
//   }
// }

// console.log(calculateGrade(55));
// console.log(calculateGrade(92));

// q14 //


// q15 //


// function isValidTriangle(angle1, angle2, angle3) {
//   if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
//     return "Invalid input: Angles must be positive.";
//   }
//   if (angle1 + angle2 + angle3 === 180) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// console.log(isValidTriangle(30, 60, 90));

// q15


// q16 //

// function fizzBuzz(number) {
//   if (typeof number !== 'number') {
//     return "Invalid input. Please enter a number.";
//   }
//   if (number % 3 === 0 && number % 5 === 0) {
//     return "FizzBuzz";
//   }
//   else if (number % 3 === 0) {
//     return "Fizz"; 
//   }
//   else if (number % 5 === 0) {
//     return "Buzz";
//   }
//   else {
//     return number; 
//   }
// }

// console.log(fizzBuzz(3,));
// console.log(fizzBuzz(5));

// q16 //


// q17 //

// function isVowel(char) {
//   if (char.length !== 1 || !/[a-zA-Z]/.test(char)) {
//     return "Invalid input. Please enter a single letter.";
//   }
//   char = char.toLowerCase();
//   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// console.log(isVowel('a'));
// console.log(isVowel('b'));

// q17 //)


// q18 //

// function getDaysInMonth(month, year) {
//   if (typeof month !== 'number' || month < 1 || month > 12) {
//     return "Invalid month";
//   }
//   if (typeof year !== 'number' || year < 0) {
//     return "Invalid year";
//   }
//   switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       return 31;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       return 30;
//     case 2:
//       if ((year % 4 === 0)) {
//         return 29;
//       } else {
//         return 28;
//       }
//     default:
//       return "Invalid month"
//   }
// }

// console.log(getDaysInMonth(2, 2024));
// console.log(getDaysInMonth(5, 2025));

// q18 //


// q19 //

// function isPalindrome(str) {
//   if (typeof str !== 'string' || str.length === 0) {
//     return "Invalid input";
//   }
//   const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   let left = 0;
//   let right = cleanStr.length - 1;

//   while (left < right) {
//     if (cleanStr[left] !== cleanStr[right]) {
//       return "Not a palindrome";
//     }
//     left++;
//     right--;
//   }
//   return "Palindrome";
// }

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("101"));

// q19 //


// q20 //

// function strongPassword(password) {
//   if (password.length < 8) {
//     return false;
//   }
//   const hasNumber = /[0-9]/.test(password);
//   const hasUppercase = /[A-Z]/.test(password);
//   const hasSpecial = /[^a-zA-Z0-9\s]/.test(password);
//   if (hasNumber && hasUppercase && hasSpecial) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(strongPassword("Fay_ism_99")); 
// console.log(strongPassword("Pass_word"));

// q20 //


// q21 //

function fibNum(number){
  
}