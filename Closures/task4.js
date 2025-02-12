function rateLimit( limit ){
    let count=0;

    return function( action ){
        if( count < limit ){
            action();
            count++;
        }
        else {
            console.log("Limit Reached")
        }
    }
}

let limited = rateLimit(2);
limited(() => console.log("Action performed:"));
limited(() => console.log("Action performed:"));
limited(() => console.log("Action performed:"));