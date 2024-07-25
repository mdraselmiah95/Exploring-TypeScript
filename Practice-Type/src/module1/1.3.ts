{
  // type guards

  type TAlpha = string | number;

  const add = (param1: TAlpha, param2: TAlpha): TAlpha => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result = add("99", 2);

  const result2 = add(99, 2);

  console.log({ result, result2 });

  // in guard

  type TNormalUser = {
    name: string;
  };

  type TAdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: TNormalUser | TAdminUser) => {
    if ("role" in user) {
      console.log(`My Name is ${user.name} and my Role is ${user.role}`);
    } else {
      console.log(`My Name is ${user.name}`);
    }
  };

  const normalUser: TNormalUser = {
    name: "Mr. Normal User",
  };

  const adminUser: TAdminUser = {
    name: "Mr. Admin User",
    role: "admin",
  };

  getUser(normalUser);
  getUser(adminUser);

  //
}
