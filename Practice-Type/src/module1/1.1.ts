{
  //

  class Animal {
    // parameter properties
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} say ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard", "Dog", "Bam bam Bam");
  const cat = new Animal("Persian", "Cat", "meaw meaw");

  cat.makeSound();
  dog.makeSound();

  //
}
