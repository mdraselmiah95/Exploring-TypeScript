{
  // OOP => inheritance

  class Student {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  const student1 = new Student("Mr Rasel", 26, "Dhaka");

  student1.getSleep(2);
  //
}
