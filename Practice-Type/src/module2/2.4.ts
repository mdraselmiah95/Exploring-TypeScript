{
  //

  // interface -> generic

  interface Developer<T, X> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type HonorWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const coolDeveloper: Developer<HonorWatch, null> = {
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

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    Model: string;
    engineCapacity: string;
  }

  const NewDeveloper: Developer<AppleWatch, YamahaBike> = {
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
    bike: {
      Model: "Yamaha",
      engineCapacity: "180cc",
    },
  };

  //
}
