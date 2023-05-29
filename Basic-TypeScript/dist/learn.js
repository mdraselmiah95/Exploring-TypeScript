"use strict";
// Array and Tuples in Typescript
var footballPlayers = [
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Neymar",
    "Kylian Mbappé",
    "Mohamed Salah",
];
footballPlayers.push("Ronaldo");
var newPlayers = footballPlayers.map(function (player, index) { return index + " => " + player; });
console.log({ newPlayers: newPlayers });
