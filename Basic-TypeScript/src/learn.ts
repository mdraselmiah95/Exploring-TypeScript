// Array and Tuples in Typescript

// let player: (string | number | boolean)[]
// let player: [string, string, number, boolean, string];
// player = ["Lionel", "Ronaldo", 107, true, "Mohamed"];

const footballPlayers: string[] = [
  "Lionel Messi",
  "Cristiano Ronaldo",
  "Neymar",
  "Kylian Mbappé",
  "Mohamed Salah",
];

footballPlayers.push("Ronaldo");

const newPlayers = footballPlayers.map(
  (player, index) => index + " => " + player
);

// console.log({ newPlayers });

// Object and Enums in Typescript
let player: {
  name: string;
  age?: number;
  country: string;
  married: boolean;
  clubs: string[];
};

player = {
  name: "Messi",
  age: 35,
  country: "Argentina",
  married: true,
  clubs: ["Barcelona"],
};

player = {
  name: "Neymar",
  country: "Brazil",
  married: false,
  clubs: ["Barcelona", "PSG"],
};

player.married = false;

player.age = player.age! + 5;

player.clubs = player.clubs?.map((club) => club.toUpperCase());

// console.log({ player }, player.clubs);

enum Friends {
  Mia = 10,
  Ethan = 9,
  Lily = 21,
  Jackson = 11,
  Ava = 31,
}

enum Config {
  API_KEY = "api_key",
  Domain_Name = "domain_name",
}

// console.log(Config.API_KEY);

// console.log(Friends.Ava);
// console.log(Friends[11]);

// Function Types

// function add(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }

// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }

// const add = (num1: number, num2: number): number => {
//   return num1 + num2;
// };

// const add = (num1: number, num2: number, num3: number): number => {
//   return num1 + num2 + num3;
// };

// const add = (num1: number, num2: number, num3: number = 0): number => {
//   return num1 + num2 + num3;
// };

const add = (...numbers: number[]): number => {
  const func = (total: number, curr: number) => total + curr;
  return numbers.reduce(func, 0);
};

let addNum: (num1: number, num2: number, num3?: number) => number;
// let addNum:Function

addNum = (num1, num2, num3 = 0) => {
  return num1 + num2 + num3;
};

const result = addNum(10, 50, 40);
// console.log(result);

// Explore Type Aliases
type FName = "Rasel" | "Shakib";
let fName: FName = "Shakib";

type arr = FName[];
const arr: arr = ["Rasel"];

type Players = [string, string, number, boolean, string];
let players: Players;

type addNum = (num1: number, num2: number, num3?: number) => number;
let addSum: addNum;

type Address = {
  preAddress: string;
  perAddress: string;
};

type Favorite = {
  type: "food" | "player" | "singer" | "actor";
  value: string;
};

type Person = {
  name: string;
  age: number;
  phone: string | string[];
  email: string;
  address: Address;
  favorites: Favorite[];
};

const person: Person = {
  name: "Rasel",
  email: "rasel@gamil.com",
  age: 26,
  phone: ["78676"],
  address: {
    perAddress: "x",
    preAddress: "y",
  },
  favorites: [
    {
      type: "food",
      value: "Rice",
    },
    {
      type: "player",
      value: "Messis",
    },
  ],
};
