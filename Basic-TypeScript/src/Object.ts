const commonUser: {
  company: "Programming Hero"; // type => literal type
  firstName: string;
  middleName?: string; // Optional type
  lastName: string;
  isMarried?: boolean;
} = {
  company: "Programming Hero",
  firstName: "Rasel",
  lastName: "Mia",
  isMarried: false,
};

const addArrow = (num1: number, num2: number): number => num1 + num2;

const testUser = {
  name: "Rafi",
  balance: 10,
  addBalance(balance: number): string {
    return `My new balance is :${this.balance + balance}`;
  },
};

const arrayOne: number[] = [1, 2, 3, 4, 5, 6, 7];

const newArray: number[] = arrayOne.map((item: number) => item * item);

// rest operator

const coolFriends = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(`Hi cool bro ${friend}`));
};

coolFriends("Ramim", "Rafi", "Tamim", "Saif", "Shamim", "Saiful", "Arman");

type Student = {
  name: string;
  age: number;
  contact: string;
  gender: string;
  isMarried: boolean;
};

const stdentOne: Student = {
  name: "Rasel",
  age: 28,
  contact: "01845515895",
  gender: "male",
  isMarried: false,
};

type Add = (num1: number, num2: number) => number;

const addTwo: Add = (num1, num2) => num1 + num2;
