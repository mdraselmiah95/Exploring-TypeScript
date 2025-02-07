{
  // polymorphism

  class Person {
    getSleep() {
      console.log(`I am sleeping 8 hours a day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`I am sleeping 7 hours a day`);
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping 6 hours a day`);
    }
  }

  //
}
