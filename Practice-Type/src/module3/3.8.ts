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

  const getSleepingHours = (params: Person) => {
    params.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  // height * width
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.width = width;
      this.height = height;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(9);
  const shape3 = new Rectangle(9, 9);

  getShapeArea(shape1);

  getShapeArea(shape2);

  getShapeArea(shape3);

  //
}
