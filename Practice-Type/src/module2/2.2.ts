{
  //

  /**
   * TODO: interface
   */

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };
  interface UserWithRole2 extends User2 {
    role: string;
  }

  const test1: UserWithRole2 = {
    name: "rasel",
    age: 19,
    role: "dev",
  };

  type rollNumber = number;

  interface User2 {
    name: string;
    age: number;
  }

  //
}
