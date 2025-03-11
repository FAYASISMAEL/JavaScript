// class Students{

//  constructor(name, id){
//         this.name=name
//         this.id = id
//     }
   
// }
   
// let student1 = new Students('alice',11)

// console.log(student1)





// prototype inheritance //

// const Vehicle={
//     type:"swift"
//     start(){
//         console.log(`${this.type} is Starting`)
        
//     }
    
// }


// const car = object.create(Vehicle)
// car.type="car"
// car.start()





// functional inheritance //

// function car(name){
//     let car={}
//     car.name=name
//     car.feature=function(){
//         console.log(`${this.name} is number one car in india`)
//     }
//     return car
// }

// const toyota=car("fortuner")
// toyota.feature()




// encapsulation //


// class BankAccount{
//     #balance;
//     constructor(initialBalance){
//         this.#balance = initialBalance
//     }
//     deposit(amount){
//         amount>0?this.#balance+=amount:console.log("the amount must be greater than 0");

//     }

//     withdraw(amount){
//         amount>0&&amount<=this.#balance?this.#balance-=amount:console.log("the amount must be greater than 0")

//     }

//     balance(){
//         console.log(`balance is ${this.#balance}`)
//     }
// }

// let Acc1 = new BankAccount(500)
// Acc1.balance()
// Acc1.deposit(200)
// Acc1.balance()
// Acc1.withdraw(100)
// Acc1.balance()




// 










// abstraction //

// class phone{
//     constructor(name){
//         this.name=name
//     }

//     #loadOs(){
//         console.log("loading OS");
        
//     }

//     powerButton(){
//         this.#loadOs()
//         console.log("turning on",this.name);
        
//     }
// }

// p= new phone("samsung")
// p.powerButton()
// p.loadOs()






// encapsulation //

// class bank{
//     #balance
//     constructor(bal){
//         this.#balance=bal
//     }

//     deposite(amnt){
//         if(amnt>0){
//             this.#balance+=amnt;
//         }
//         else{
//             console.log("invalid amount");
//         }
//     }

//     checkbalance(){
//         console.log(this.#balance);
        
//     }
// }

// let user = new bank(10000)

// user.deposite(500)
// user.checkbalance()
// user.balance()





// inheritance //

// class father{
// constructor(name,address){
//     this.name=name;
//     this.address=address;
// }
// }

// class child extends father{

// }

// let c1 = new father("john","rosevilla")
// console.log(c1);
