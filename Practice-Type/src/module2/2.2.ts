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

  // js --> object , array--> object function ->object

  type Roll = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 4, 5, 6];

  type Add2 = (num1: number, num2: number) => number;

  interface Add3 {
    (num1: number, num2: number): number;
  }

  const test3: Add3 = (num1, num2) => num1 * num2;

  test3(2.6, 2);
  //
}
