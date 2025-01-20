{
  //

  //TODO: generic type
  type GenericArray<T> = Array<T>;

  const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5, 6];
  const mentors: GenericArray<string> = ["MR Rom", " MR sk", "MR UY", "Mr YY"];
  const boolArray: GenericArray<boolean> = [true, false, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Cool Boy",
      age: 33,
    },
    {
      name: "Cool Boy",
      age: 110,
    },
  ];

  //
}
