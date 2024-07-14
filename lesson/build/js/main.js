"use strict";
let obj;
obj = [];
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello");
logMsg(add(3, 7));
let multiply = function (c, d) {
    return c * d;
};
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
console.log(sumAll(undefined, 20));
console.log(addAll(1, 20));
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(4, 5, 6, 9, 19, 12));
const createError = (message) => {
    throw new Error(message);
};
