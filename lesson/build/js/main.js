"use strict";
//Generic types
const echo = (arg) => {
    return { arg, is: !!arg };
};
console.log(echo(2));
const userFunction = (user) => {
    return user;
};
console.log(userFunction({ id: 1, username: "Ejiro", name: "Mixke", description: "dd" }));
