//Generic types

const echo = <T>(arg: T): { arg: T; is: boolean } => {
  return { arg, is: !!arg };
};

console.log(echo(2));

interface HasId {
  id: number;
  username: string;
}

const userFunction = <T extends HasId>(user: T): T => {
  return user;
};

console.log(
  userFunction({ id: 1, username: "Ejiro", name: "Mixke", description: "dd" })
);
