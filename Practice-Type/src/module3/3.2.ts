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

  class Teacher {
    name: string;
    age: number;
    address: string;
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.designation = designation;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass}`);
    }
  }

  const teacher1 = new Teacher("Mr Ibn", 33, "DH", "Math Professor");
  teacher1.takeClass(4);
  //
}
