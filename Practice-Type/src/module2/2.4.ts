{
  //

  // interface -> generic

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }

  //
}
