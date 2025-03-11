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
//     #balance; // Private field

//     constructor(owner, balance) {
//         this.owner = owner;
//         this.#balance = balance;
//     }

//     getBalance() {
//         return this.#balance;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount; // here #balance is the private variables
//             console.log(`${this.owner} deposited: $${amount}. New balance: $${this.#balance}`);
//         } else {
//             console.log("Deposit amount must be positive.");
//         }
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.#balance) {
//             this.#balance -= amount;
//             console.log(`${this.owner} withdrew: $${amount}. New balance: $${this.#balance}`);
//         } else {
//             console.log(`${this.owner} has insufficient funds for this withdrawal.`);
//         }
//     }
// }

// class SavingsAccount extends Account {
//     constructor(owner, balance, interestRate) {
//         super(owner, balance);
//         this.interestRate = interestRate;
//     }

//     applyInterest() {
//         let interest = this.getBalance() * this.interestRate;
//         this.deposit(interest);
//         console.log(`${this.owner} earned interest: $${this.interestRate}. New balance: $${this.getBalance()}`);
//     }
// }

// class CurrentAccount extends Account {
//     constructor(owner, balance, overdraftLimit) {
//         super(owner, balance);
//         this.overdraftLimit = overdraftLimit;
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.getBalance() + this.overdraftLimit) {
//             super.withdraw(amount);
//         } else {
//             console.log(`${this.owner} exceeded overdraft limit!`);
//         }
//     }
// }

// const savings = new SavingsAccount("Alice", 1000, 0.07);
// savings.applyInterest();
// savings.withdraw(200);
// console.log(`${savings.owner}'s Balance: $${savings.getBalance()}`);








// question 4 //

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(this.name + 'is' + this.year + 'years old');
    }
}

class Student extends Person {
    constructor(name, grade, result) {
        super(name, result);
        this.grade = grade;
        this.result = result;
    }
    describe() {
        console.log(this.name + 'is a student in grade ' + this.grade + 'and he ' + this.result + ' in all subject');
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    describe() {
        console.log(this.name + 'is a teacher who teaches ' + this.subject);
    }
}

class Administrator extends Person {
    constructor(name, age, department) {
        super(name, age);
        this.department = department;
    }
    describe() {
        console.log(this.name + 'is an administrator in the ' + this.department);
    }
}

const student = new Student("Alice", 10, "Passed");
const teacher = new Teacher("Mr. Smith", 35, "Mathematics");
const admin = new Administrator("Mrs. Johnson", 40, "Admissions");

student.describe();
teacher.describe();
admin.describe();