function discount(discountPercentage){
    return function(price){
        let discount = (discountPercentage / 100) * price;
        let finalPrice = price - discount;
        return finalPrice;
    }
}

let tenPercentageDiscount = discount(10);
let twentyPercentageDiscount = discount(20);

console.log(twentyPercentageDiscount(400));
console.log(tenPercentageDiscount(100));