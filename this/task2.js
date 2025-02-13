
// function calculateArea() {
//     return this.length * this.width;
// }
// const rectangle1 = { length: 10, width: 5 };
// const rectangle2 = { length: 8, width: 4 };
// const area1 = calculateArea.call(rectangle1);
// const area2 = calculateArea.call(rectangle2);

// console.log(`Area of Rectangle 1: ${area1}`);
// console.log(`Area of Rectangle 2: ${area2}`);














// const person = {
//     introduce: function(city, country) {
//         console.log(`Hello, my name is ${this.name}. I am ${this.age} years old and I live in ${city}, ${country}`);
//     }
// };

// const person1 = { name: "Alice", age: 25 };
// const person2 = { name: "Bob", age: 30 };

// person.introduce.apply(person1, ["New York", "USA"]);
// person.introduce.apply(person2, ["London", "UK"]);







// function logUserName() {
//     console.log(`User: ${this.name}`);
// }

// const user = { name: "Alice" };

// const logAlice = logUserName.bind(user);

// logAlice();











// function calculateSum() {
//     return Array.from(arguments).reduce((sum, num) => sum + num, 0);
// }

// const numbers = [10, 20, 30, 40, 50];

// const totalSum = calculateSum.apply(null, numbers);

// console.log("Total Sum:", totalSum);














// const greeter = {
//     greet: function() {
//         console.log(`Hello, ${this.name}! Welcome!`);
//     }
// };

// const user1 = { name: "Alice" };
// const user2 = { name: "Bob" };

// greeter.greet.call(user1); 
// greeter.greet.call(user2);









// const user = {
//  name: "Alice",
//      greet: function() {
// console.log(`Hello, ${this.name}!`);
//     }
// };










// function updateUser(age, city) {
//     this.age = age;
//     this.city = city;
// }

// const user1 = { name: "Alice", age: 25, city: "New York" };
// const user2 = { name: "Alen", age: 30, city: "London" };

// updateUser.call(user1, 28, "Los Angeles");
// updateUser.call(user2, 35, "Paris");

// console.log(user1);
// console.log(user2); 









// function greet(name = "Guest", greeting = "Hello") {
//     console.log(`${greeting}, ${name}!`);
// }

// greet(); 
// greet("Alice"); 
// greet("Bob", "Hi"); 

// const sayHelloTo = greet.bind(null, "Charlie");

// sayHelloTo(); 
// sayHelloTo("Hey");








function formatDateString(format, dateString) {
    const date = new Date(dateString);
    
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); 

    // Formatting based on input format
    if (format === "DD/MM/YYYY") {
        return `${day}/${month}/${year}`;
    } else if (format === "MM-DD-YYYY") {
        return `${month}-${day}-${year}`;
    } else {
        return `${year}-${month}-${day}`;
    }
}
const date1 = formatDateString.apply(null, ["DD/MM/YYYY", "2025-02-13"]);
console.log(date1); 
const date2 = formatDateString.apply(null, ["MM-DD-YYYY", "2023-07-20"]);
console.log(date2);

const date3 = formatDateString.apply(null, ["YYYY-MM-DD", "2019-11-05"]);
console.log(date3); 
