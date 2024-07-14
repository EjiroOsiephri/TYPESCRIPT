const stringArr = ["Hey", "Ejiro", "us", "a ", "boy"];

let numberArr = [1, 2, 3, 4, 5, 6, 7];

const stringDataArr: string[] = [];
const dataArr: any[] = [];

stringArr.push("Data");

dataArr.unshift(false);

//tupules

let myTupules: [string, number, boolean] = ["Ejiro", 23, true];

let generalArr: (string | number | boolean)[] = ["Mike", 34, false];

generalArr = myTupules;

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Mogan",
  active: true,
  albums: ["Mike logan", 40],
};

let jp: Guitarist = {
  active: true,
  albums: ["I", "II", "III"],
};

evh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello there ${guitarist.name}`;
};

console.log(greetGuitarist(jp));

enum Grade {
  A,
  B,
  C,
  D,
  E,
  F,
}

console.log(Grade.A);
