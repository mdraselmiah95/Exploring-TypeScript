{
  // class and object

  // oop - class

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepared", "Dog", "Ghew Ghew");
  const cat = new Animal("Persian cat", "cat", "meaw meaw");

  cat.makeSound();

  //
}
