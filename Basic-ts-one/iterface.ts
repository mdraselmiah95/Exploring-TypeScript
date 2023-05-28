interface player {
  name: string;
  club: string;
  salary: number;
  wife?: string;
  perviousClub?: string[];
}

const shakib: player = {
  name: "shakib",
  club: "BD",
  salary: 80000,
  wife: "bou",
};

const asif: player = {
  name: "Asif",
  club: "BD",
  salary: 2300,
};

interface Employee {
  name: string;
  designating?: string;
  salary: number;
  age?: number;
}
interface Developer extends Employee {
  language: string;
  codeEditor: string;
  typingSpeed: number;
}

const rohim: Developer = {
  name: "Rohim",
  salary: 31000,
  age: 26,
  language: "javaScript",
  codeEditor: "VS code",
  typingSpeed: 39,
};
