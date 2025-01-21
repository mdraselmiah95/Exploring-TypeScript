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

  type HonorWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const coolDeveloper: Developer<HonorWatch> = {
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

  type AppleWatch = {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  };

  const NewDeveloper: Developer<AppleWatch> = {
    name: "Mr Cool Dev",
    computer: {
      brand: "HP",
      model: "Pro book",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Apple watch",
      model: "watch 2",
      heartTrack: true,
      sleepTrack: true,
    },
  };

  //
}
