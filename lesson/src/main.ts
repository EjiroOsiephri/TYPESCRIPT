type stringOrNumber = string | number;

type stringOrNumberArr = (string | number)[];

let obj: object;

obj = [];

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello");
logMsg(add(3, 7));

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};

//optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

console.log(sumAll(undefined, 20));
console.log(addAll(1, 20));

const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(4, 5, 6, 9, 19, 12));

const createError = (message: string) => {
  throw new Error(message);
};
