"use strict";
class Coder {
    constructor(name, age, lang = "Typescript") {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.lang = lang;
    }
    getModel(name) {
        return `This is my name ${name} and my other name ${this.name} i am ${this.age} years old and i learnt a new language named ${this.lang}`;
    }
}
const Ejiro = new Coder("Ejiro", 56);
console.log(Ejiro.getModel("Timi"));
class WebDev extends Coder {
    constructor(name, age, lang) {
        super(name, age, lang);
        this.name = "Eji";
        this.name = name;
    }
}
const sara = new WebDev("Ejiro", 43, "NodeJS");
console.log(sara);
class coder {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    action(value) {
        return `This is my life ${value}`;
    }
}
const MadInterfaceIdea = new coder("Baddie");
console.log(MadInterfaceIdea.action("I alone am the king of the field"));
