"use strict";
// Array and Tuples in Typescript
var _a;
// let player: (string | number | boolean)[]
// let player: [string, string, number, boolean, string];
// player = ["Lionel", "Ronaldo", 107, true, "Mohamed"];
var footballPlayers = [
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Neymar",
    "Kylian Mbappé",
    "Mohamed Salah",
];
footballPlayers.push("Ronaldo");
var newPlayers = footballPlayers.map(function (player, index) { return index + " => " + player; });
// console.log({ newPlayers });
// Object and Enums in Typescript
var player;
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
player.age = player.age + 5;
player.clubs = (_a = player.clubs) === null || _a === void 0 ? void 0 : _a.map(function (club) { return club.toUpperCase(); });
// console.log({ player }, player.clubs);
var Friends;
(function (Friends) {
    Friends[Friends["Mia"] = 10] = "Mia";
    Friends[Friends["Ethan"] = 9] = "Ethan";
    Friends[Friends["Lily"] = 21] = "Lily";
    Friends[Friends["Jackson"] = 11] = "Jackson";
    Friends[Friends["Ava"] = 31] = "Ava";
})(Friends || (Friends = {}));
var Config;
(function (Config) {
    Config["API_KEY"] = "api_key";
    Config["Domain_Name"] = "domain_name";
})(Config || (Config = {}));
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
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var func = function (total, curr) { return total + curr; };
    return numbers.reduce(func, 0);
};
var addNum;
addNum = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    return num1 + num2 + num3;
};
var result = addNum(10, 50, 40);
console.log(result);
