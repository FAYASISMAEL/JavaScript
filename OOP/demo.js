// class object //

// class std{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }

// }

// let obj = new std("john",22)
// console.log(obj);




// abstraction //

// class phone{
//     constructor(name){
//         this.name=name
//     }

//     #loados(){
//         console.log("loading os");
//     }

//     powerbutton(){
//         this.#loados()
//         console.log(this.name,"turning on");
//     }
// }

// let p = new phone("samsung")
// p.powerbutton()
// // p.#loados()  




// class car{
//     constructor(name){
//         this.name=name
//     }

//     #engine(){
//         console.log("engine ready to start");
        
//     }

//     keyswitch(){
//         this.#engine()
//         console.log("starting..");
        
//     }
// }

// let c = new car("benz")
// c.keyswitch()






// inheritance // 

// class Father{
//     constructor(name,address){
//         this.name=name
//         this.address=address
//     }
// }

// class child extends Father{

// }

// let c1 = new child("john","rosevilla")
// console.log(c1);




// // inheritance using super keyword //

// class Father{
//     constructor(name,address){
//         this.name=name
//         this.address=address
//     }
// }

// class child extends Father{
//     constructor(name,address,surname){
//         super(name,address)
//         this.surname=surname
//     }
// }

// let c1 = new child("john","rosevilla","jac")
// console.log(c1);




// prototype inheritance //

// let animal={
//     eat:true,
//     sleep(){
//         console.log("sleeping....");
        
//     }
// }

// let dog=Object.create(animal)
// console.log(dog);

// dog.bark=true
// console.log(dog.eat);
// console.log(dog.bark);
// dog,sleep()



// let car={
//     run:true,
//     running(){
//         console.log("car is running");
        
//     }
// }

// let bmw = Object.create(car)
// bmw.sport=true
// console.log(bmw.run);

// console.log(bmw.sport);
// bmw.running()






// encapsulation //

// class Bank{
//     balance
//     constructor(bal){
//         this.balance=bal

//     }

//     deposite(amt){
//         if(amt>0){
//             this.balance+=amt
//         }
//         else{
//             console.log("invalid amount");
            
//         }
//     }

//     checkbalance(){
//         console.log(this.balance);
        
//     }
// }

// let user = new Bank(1000)
// user.deposite(500)
// user.checkbalance()

// console.log();
















































// class Parent{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }

//     method1(){
//         console.log(`${this.name} method 1 worked `);
//     }

//     method2(){
//         console.log(`${this.name} method 2 worked `);
        
//     }
// }

// class child extends Parent{
//     constructor(name,age,mark){
//         super(name,age)
//         this.mark=mark
//     }

// }

// let c1 = new child("john",22,85)
// console.log(c1.name);
// console.log(c1.age);
// console.log(c1.mark);
// c1.method1()
// c1.method2()








// method overriding //

// class Animal{
//     makeSound(){
//         console.log("animal makes general sound");
        
//     }
// }

// class dog extends Animal{
//     makeSound(){
//         console.log("woof woof");
        
//     }
// }

// class cat extends Animal{
//     makeSound(){
//         console.log("meow meow");
        
//     }
// }

// let obj = new cat()
// obj.makeSound()







// method loading //

// class Calc{
//     add(a,b){
//         console.log("add1");
        
//         return a+b+c;
//     }
//     add(a,b,c=0){
//         console.log("add2");
        
//         return a+b+c;
//     }
// }

// let obj = new Calc();
// console.log(obj.add(2,2));












// class Bank{
//     #balance
//     constructor(bal){
//     this.#balance=bal
//     }

//     deposite(amt){
//         if(amt>=0){
//             this.#balance+=amt
//         }
//         else{
//             console.log("invalid amount");       
//         }
//     }

//     checkbalance(){
//         console.log(this.#balance);
        
//     }
// }

// let user = new Bank(1000)
// user.deposite(500)
// user.checkbalance()
// // user.#balance




// class Calc{
//     add(a,b,c=0){
//         console.log("add1");
//         return a+b+c
//     }
// }

// let obj = new Calc()
// console.log(obj.add(1,2));





class Person{
    constructor(name){
        this.name=name
    }

    get names(){
        return this.name
    }

    // set name1(nm){
    //     this.name=nm
    // }
}

let a = new Person("jacob")
// a.name1="sam"
console.log(a.names);
