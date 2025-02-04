{
  //Type guard using typeof & in

  type Alphanumeric = string | number;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 9);
  const result2 = add("6", "0");
  console.log({ result1, result2 });

  // in guard
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "Admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const user1: NormalUser = {
    name: "Mr. Rasel normal",
  };

  const user2: AdminUser = {
    name: "Mr. Rasel normal",
    role: "Admin",
  };

  getUser(user1);
  getUser(user2);

  //
}
