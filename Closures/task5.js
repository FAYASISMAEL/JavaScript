function greeting(name){
    return function(time){
        return `Good ${time},${name} Have a good day`;
    }
}

let greet1 = greeting("Fayas");
console.log(greet1("Morning"));
console.log(greet1("Evening"));