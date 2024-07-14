"use strict";
const stringArr = ["Hey", "Ejiro", "us", "a ", "boy"];
let numberArr = [1, 2, 3, 4, 5, 6, 7];
const stringDataArr = [];
const dataArr = [];
stringArr.push("Data");
dataArr.unshift(false);
//tupules
let myTupules = ["Ejiro", 23, true];
let generalArr = ["Mike", 34, false];
generalArr = myTupules;
let evh = {
    name: "Mogan",
    active: true,
    albums: ["Mike logan", 40],
};
let jp = {
    active: true,
    albums: ["I", "II", "III"],
};
evh = jp;
const greetGuitarist = (guitarist) => {
    return `Hello there ${guitarist.name}`;
};
console.log(greetGuitarist(jp));
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
    Grade[Grade["E"] = 4] = "E";
    Grade[Grade["F"] = 5] = "F";
})(Grade || (Grade = {}));
console.log(Grade.A);
