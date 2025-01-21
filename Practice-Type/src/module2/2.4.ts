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

  const coolDeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
  }> = {
    name: "Rasel",
    computer: {
      brand: "Mac",
      model: "M2",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "Honor",
      model: "Brand 7",
      display: "Amoled",
    },
  };

  //
}
