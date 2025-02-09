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

  //
}
