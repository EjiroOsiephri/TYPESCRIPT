class Coder {
  constructor(
    public readonly name: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.age = age;
    this.lang = lang;
  }
  getModel(name: string) {
    return `This is my name ${name} and my other name ${this.name} i am ${this.age} years old and i learnt a new language named ${this.lang}`;
  }
}

const Ejiro = new Coder("Ejiro", 56);

console.log(Ejiro.getModel("Timi"));

class WebDev extends Coder {
  public name: string = "Eji";

  constructor(name: string, age: number, lang: string) {
    super(name, age, lang);
    this.name = name;
  }
}

const sara = new WebDev("Ejiro", 43, "NodeJS");

console.log(sara);

interface MadInterface {
  name: string;
  action(value: string): string;
}

class coder implements MadInterface {
  constructor(public name: string) {
    this.name = name;
  }
  action(value: string) {
    return `This is my life ${value}`;
  }
}

const MadInterfaceIdea = new coder("Baddie");
console.log(MadInterfaceIdea.action("I alone am the king of the field"));
