"use strict";
//type assertions
let a = "Hello";
let b = a;
// it gives b the type of two and also the value of a, it would have given b the type of a but a as a less specific type
let c = a;
let d = "hello";
let e = 2;
const addFunction = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let getValue = addFunction(2, 3, "concat");
