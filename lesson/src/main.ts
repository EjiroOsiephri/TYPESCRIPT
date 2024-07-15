interface TransactionObj {
  [index: string]: number;
}

let trasactionFunction = (transactions: TransactionObj) => {
  let total = 0;
  for (const transaction in transactions) {
    console.log(transaction);

    total += transactions[transaction];
  }
  return total;
};

console.log(
  trasactionFunction({
    name: 23,
    age: 67,
  })
);
type streams = "job" | "income" | "sidehustle";

type incomes = Record<streams, number | string>;

let income: incomes = {
  income: "Software engineer",
  job: "marketer",
  sidehustle: "killing",
};
