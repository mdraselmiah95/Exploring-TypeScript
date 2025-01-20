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

  // Define a generic array type to handle arrays of any type
  type GenericArray1<T> = Array<T>;

  // Arrays of various types using the GenericArray
  const studentIDs: GenericArray<number> = [101, 102, 103, 104];
  const instructorNames: GenericArray<string> = [
    "John Doe",
    "Jane Smith",
    "Emily Johnson",
  ];
  const isActive: GenericArray<boolean> = [true, false, true];

  // Using GenericArray for complex objects
  const employees: GenericArray<{
    name: string;
    age: number;
    position: string;
  }> = [
    {
      name: "Alice Brown",
      age: 29,
      position: "Software Developer",
    },
    {
      name: "Bob White",
      age: 45,
      position: "Project Manager",
    },
  ];

  // Function to sum two numbers, demonstrating basic generic usage
  const sum = (x: number, y: number): number => x + y;
  sum(20, 25);

  // Define a generic tuple type for a structured pair of different types
  type GenericTuple1<X, Y> = [X, Y];

  // Tuple storing a string and an array of strings
  const departmentInfo: GenericTuple<string, string[]> = [
    "Engineering",
    ["Software", "Civil", "Electrical"],
  ];

  // Tuple to hold user ID and user details
  const userDetails: GenericTuple<number, { name: string; email: string }> = [
    204,
    { name: "Charlie Green", email: "charlie.green@example.com" },
  ];

  //
}
