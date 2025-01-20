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

  const add = (x: number, y: number) => x * y;
  add(30, 44);

  // generic tuple
  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X, Mr.y"];

  const manushId: GenericTuple<
    number,
    {
      name: string;
      email: string;
    }
  > = [1233, { name: "Rasel", email: "rasel@gmail.com" }];

  //
}
