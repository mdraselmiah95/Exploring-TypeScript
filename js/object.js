"use strict";
const city = "Dhaka";
const student = {
    name: "Shakib",
    age: 27,
    salary: 16000,
};
const employee = {
    name: "Rohim",
    age: 32,
    salary: 35000,
};
const studentBio = {
    name: "Rohim",
    roll: 12,
    subject: "Economy",
};
function getSalary(player) {
    return player.salary;
}
getSalary({ name: "Rohim", salary: 50 });
function getSalary2(player) {
    return player.salary;
}
