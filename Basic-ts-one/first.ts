/* const myNumber = 5;
const myName = "Shakib";
console.log("Hello from TypeScript", myNumber, myName); */

let money = 9000;
// money = "";
// money = false;
money = 6059;
let taka: number = 9000;
// console.log(taka);

let nameOne: string = "This is a string type.";
let isHappy: boolean = false;
const age: number = 25;

const add = (one: number, two: number): number => {
  const result = one + two;
  return result;
};
const newNumber: number = add(12, 11);
console.log(newNumber);

function sum(numOne: number, numTwo: number): number {
  const total = numOne * numTwo;
  return total;
}

const newTotal: number = sum(10, 11);
console.log(newTotal);

function addNumber(num: number, num2: number): Number {
  const result = num + num2;
  return result;
}

const output: number = add(12, 10);
console.log(output);

function doubleConsole(num3: number): void {
  console.log(3 * num3);
}

doubleConsole(4);

let play: number | string = "naymer";
console.log(play);

let FullName = (first: string, last: string) => first + last;

// const numbers = [12, 13, 45, 77, 13, 78];
// const ages: [number];
// let ages: [numbers];
// const numbers: number[12,24,44,44,89,11];
const ages: number[] = [12, 45, 77, 98, 12, 12];
