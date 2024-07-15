//type assertions

type one = string;
type two = string | number;
type three = "Hello";

let a: one = "Hello";
let b = a as two;

// it gives b the type of two and also the value of a, it would have given b the type of a but a as a less specific type

let c = a as three;

let d = <one>"hello";

let e = <string | number>2;

type stringOrNumber = string | number;

const addFunction = (
  a: number,
  b: number,
  c: "concat" | "add"
): stringOrNumber => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

let getValue: string = addFunction(2, 3, "concat") as string;
