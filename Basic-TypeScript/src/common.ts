// (null , undefined, any) type, Type Assertions(as)

interface User {
  name: string;
  email: string;
}

// let user: User | null | undefined = null;

let user: User = {} as User;
user = { name: "user", email: "user@gmail.com" };
user?.email;

interface Description {
  Arif: string;
  John: string;
}

let description: Description = {} as Description;

const friends = ["shomon", "Kazol"] as const;
const userOne = {
  name: "user",
  email: "x@gmail.com",
} as const;

// friends.forEach((it) => {
//   description[it] = it + "on fire";
// });
