// Array and Tuples in Typescript

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

console.log({ newPlayers });
