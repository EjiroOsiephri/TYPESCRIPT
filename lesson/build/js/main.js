"use strict";
let trasactionFunction = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        console.log(transaction);
        total += transactions[transaction];
    }
    return total;
};
console.log(trasactionFunction({
    name: 23,
    age: 67,
}));
let income = {
    income: "Software engineer",
    job: "marketer",
    sidehustle: "killing",
};
