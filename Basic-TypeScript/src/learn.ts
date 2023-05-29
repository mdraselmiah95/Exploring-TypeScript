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
  Mia,
  Ethan,
  Lily,
  Jackson,
  Ava,
}
console.log({ Friends });
