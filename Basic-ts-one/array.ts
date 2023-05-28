const salary: number = 7800;
const friendsSalary: number[] = [
  1200, 4500, 9800, 7007, 2300, 5500, 1300, 7500,
];
const friends: string[] = ["Asif", "Shakib", "Rohim", "Mizan"];
friendsSalary[4] = 5600;
friends.push("Kazol");

let max = 0;
for (const salary of friendsSalary) {
  if (salary > max) {
    max = salary;
  }
}
