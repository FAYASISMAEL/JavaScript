// question 1 //

// class Library{
//     constructor(){
//         this.book=[]
//     }

//     addBook(abook){
//         this.book.push(abook)
//         console.log("Book Added Successfully");
        
//     }

//     displayBook(){
//         this.book.forEach(item=>console.log(item))
//     }

//     trackBook(sbook){
//         let res=this.book.find((item)=>sbook==item)
//         if(res==sbook){
//             console.log(`${sbook} is Available`);
//         }else{
//             console.log(`${sbook} is Not Available`);
//         }
        
//     }
// }

// var bk=new Library()

// bk.addBook("Alchemist")
// bk.addBook("Goat Life")
// bk.displayBook()
// // bk.trackBook('Alchemist')






// question 2 //

// class Vehicle {
//     constructor(color, model, year) {
//         this.color = color;
//         this.model = model;
//         this.year = year;
//     }

//     displayInfo() {
//         console.log(this.year + ' ' + this.color + ' ' + this.model);
//     }
// }

// class Car extends Vehicle {
//     constructor(color, model, year, topspeed) {
//         super(color, model, year);
//         this.topspeed = topspeed;
//     }
// }

// class Bike extends Vehicle {
//     constructor(color, model, year, capacity) {
//         super(color, model, year);
//         this.capacity = capacity;
//     }
// }

// const car1 = new Car("Toyota", "White", 2017);
// const bike1 = new Bike("Triumph", "Black", 2023);

// car1.displayInfo();
// bike1.displayInfo();






// question 3 //



// class Account {
//     #balance;

//     constructor(acc_number, acc_name, balance) {
//         this.acc_number = acc_number;
//         this.acc_name = acc_name;
//         this.#balance = balance;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//             console.log(`${amount} has been added. New balance is ${this.#balance}`);
//         } else {
//             console.log("Amount must be greater than zero.");
//         }
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.#balance) {
//             this.#balance -= amount;
//             console.log(`${amount} has been withdrawn. New balance is ${this.#balance}`);
//         } else {
//             console.log("Insufficient balance or invalid withdrawal amount.");
//         }
//     }

//     showaccDetails() {
//         console.log(`Account Number: ${this.acc_number}, Account Holder: ${this.acc_name}`);
//     }

//     showBalance() {
//         return this.#balance;
//     }
// }

// class SavingsAccount extends Account {
//     constructor(acc_number, acc_name, balance, interestRate) {
//         super(acc_number, acc_name, balance);
//         this.interestRate = interestRate;
//     }
// }

// class CurrentAccount extends Account {
//     constructor(acc_number, acc_name, balance, overdraftLimit) {
//         super(acc_number, acc_name, balance);
//         this.overdraftLimit = overdraftLimit;
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.showBalance() + this.overdraftLimit) {
//             super.withdraw(amount);
//         } else {
//             console.log("Withdrawal exceeds overdraft limit.");
//         }
//     }
// }


// const savings = new SavingsAccount(101, "Alice", 2000, 5);
// const savings1 = new SavingsAccount(1408, "Akhil", 800, 90);
// const current = new CurrentAccount(102, "Althaf", 1000, 500);


// savings.showaccDetails();
// console.log("Savings Initial Balance:", savings.showBalance());
// savings.deposit(500);
// console.log("Savings Final Balance:", savings.showBalance());

// console.log("\n");


// savings1.showaccDetails();
// console.log("Savings Initial Balance:", savings1.showBalance());
// savings1.deposit(400);
// console.log("Savings Final Balance:", savings1.showBalance());

// console.log("\n");

// current.showaccDetails();
// console.log("Current Initial Balance:", current.showBalance());
// current.deposit(300);
// current.withdraw(1200);
// current.withdraw(800);
// console.log("Current Final Balance:", current.showBalance());

// console.log(current.showBalance()); 








// question 4 //

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     describe() {
//         console.log(this.name + 'is' + this.year + 'years old');
//     }
// }

// class Student extends Person {
//     constructor(name, grade, result) {
//         super(name, result);
//         this.grade = grade;
//         this.result = result;
//     }
//     describe() {
//         console.log(this.name + 'is a student in grade ' + this.grade + 'and he ' + this.result + ' in all subject');
//     }
// }

// class Teacher extends Person {
//     constructor(name, age, subject) {
//         super(name, age);
//         this.subject = subject;
//     }
//     describe() {
//         console.log(this.name + 'is a teacher who teaches ' + this.subject);
//     }
// }

// class Administrator extends Person {
//     constructor(name, age, department) {
//         super(name, age);
//         this.department = department;
//     }
//     describe() {
//         console.log(this.name + 'is an administrator in the ' + this.department);
//     }
// }

// const student = new Student("Alice", 10, "Passed");
// const teacher = new Teacher("Mr. Smith", 35, "Mathematics");
// const admin = new Administrator("Mrs. Johnson", 40, "Admissions");

// student.describe();
// teacher.describe();
// admin.describe();






// question 5 //

// function Gamecharacter(name, direction){
//     this.name = name;
//     this.direction = direction
// }

// Gamecharacter.prototype.move = function(){
//     console.log(`${this.name} moves ${this.direction}.`);
// }

// Gamecharacter.prototype.attack = function(){
//     console.log(`${this.name} attaks .`);
// }

// function hero(name, direction) {
//     Gamecharacter.call(this, name, direction);  
// }

// hero.prototype = Object.create(Gamecharacter.prototype);
// hero.prototype.constructor = hero;

// hero.prototype.ability = function(){
//     console.log(`${this.name} super strength ability`)
// }

// const myhero = new hero("Thor","Forward");
// myhero.ability();
// myhero.attack();
// myhero.move();






