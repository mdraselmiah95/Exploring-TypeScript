const city: string = "Dhaka";

type person = {
  name: string;
  age: number;
  salary: number;
};

const student: person = {
  name: "Shakib",
  age: 27,
  salary: 16000,
};

const employee: person = {
  name: "Rohim",
  age: 32,
  salary: 35000,
};

const studentBio: { name: string; roll: number; subject: string } = {
  name: "Rohim",
  roll: 12,
  subject: "Economy",
};

function getSalary(player: { name: string; salary: number }): number {
  return player.salary;
}

getSalary({ name: "Rohim", salary: 50 });

function getSalary2(player: person): number {
  return player.salary;
}
