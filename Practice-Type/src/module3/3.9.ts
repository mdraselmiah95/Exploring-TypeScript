{
  // Abstraction in OOP

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }

    stopEngine(): void {
      console.log(`I am stoping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car engine`);
    }
  }

  const HondaCar = new Car();

  HondaCar.startEngine();

  abstract class Vehicle2 {
    abstract startEngine(): void {}
    abstract stopEngine(): void {}
    abstract move(): void {}

    test() {
      console.log(`This is a test.`);
    }
  }

  class HondaCar1 extends Vehicle2 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stoping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car engine`);
    }
  }

  // abstract class

  //
}
